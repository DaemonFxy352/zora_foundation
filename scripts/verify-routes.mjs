import assert from "node:assert/strict";
import next from "next";
import { IncomingMessage, ServerResponse } from "node:http";
import { Duplex } from "node:stream";
import { builtRoutes } from "./build-pages.mjs";

// Exercise Next's real production request handler without opening a network port.
// Browser navigation/hydration remains a separate check.
const app = next({
  dev: false,
  dir: process.cwd(),
  hostname: "localhost",
  port: 3100,
});
await app.prepare();
const handler = app.getRequestHandler();
async function request(path, expected) {
  const chunks = [];
  const socket = new Duplex({
    read() {},
    write(chunk, encoding, callback) {
      chunks.push(Buffer.from(chunk));
      callback();
    },
  });
  socket.remoteAddress = "127.0.0.1";
  const req = new IncomingMessage(socket);
  req.method = "GET";
  req.url = path;
  req.headers = { host: "localhost:3100" };
  req.push(null);
  const res = new ServerResponse(req);
  res.assignSocket(socket);
  const finished = new Promise((resolve, reject) => {
    res.on("finish", resolve);
    res.on("error", reject);
  });
  try {
    await handler(req, res);
    await finished;
    assert.equal(res.statusCode, expected, path);
    const raw = Buffer.concat(chunks).toString();
    if (expected === 404)
      assert.ok(raw.includes('name="robots" content="noindex"'), path);
    if (path === "/education?topic=phishing")
      assert.ok(
        raw.includes(
          'rel="canonical" href="https://www.zorasafefoundation.org/education"',
        ),
      );
    if (path === "/education/")
      assert.equal(res.getHeader("location"), "/education");
    console.log(`PASS ${expected} ${path}`);
  } finally {
    socket.destroy();
  }
}
try {
  for (const route of builtRoutes) await request(route, 200);
  for (const route of [
    "/sitemap.xml",
    "/robots.txt",
    "/brand/zorasafe-foundation-social1.png",
  ])
    await request(route, 200);
  for (const route of [
    "/research/test-report",
    "/research/unpublished-example",
    "/education/not-a-resource",
    "/education/handouts/not-a-handout",
    "/programs/teen-digital-safety",
    "/workshops/older-adult-scam-prevention",
    "/not-a-real-page",
  ])
    await request(route, 404);
  await request("/education?topic=phishing", 200);
  await request("/education/", 308);
  console.log(
    `Verified ${builtRoutes.length} production HTML routes, metadata endpoints, missing/draft routes, query canonical and slash redirect.`,
  );
} finally {
  await app.close();
}
