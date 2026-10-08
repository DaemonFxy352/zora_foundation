import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
// Include future published reports automatically; never include metadata or error routes.
const manifest = JSON.parse(
  readFileSync(".next/prerender-manifest.json", "utf8"),
);
export const builtRoutes = Object.keys(manifest.routes).filter(
  (route) =>
    !route.startsWith("/_") &&
    existsSync(
      join(
        ".next/server/app",
        route === "/" ? "index.html" : `${route.slice(1)}.html`,
      ),
    ),
);
