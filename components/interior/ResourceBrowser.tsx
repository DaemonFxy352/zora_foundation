"use client";
import { useRef, useState } from "react";
import { audiences, topics, formats, resources } from "@/data/resources";
import { ResourceList } from "./ResourceList";
import { Point, Arrow } from "@/components/Brand";

export function ResourceBrowser() {
  const [audience, setAudience] = useState("");
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("");
  const resultsHeading = useRef<HTMLHeadingElement>(null);
  const visible = resources.filter(
    (r) =>
      (!audience || r.audience.some((a) => a === audience)) &&
      (!topic || r.topics.some((t) => t === topic)) &&
      (!format || (format === "printable" ? r.printView : r.format === format)),
  );
  function browse(kind: "audience" | "topic", id: string) {
    setAudience(kind === "audience" ? id : "");
    setTopic(kind === "topic" ? id : "");
    setFormat("");
    resultsHeading.current?.focus();
    resultsHeading.current?.scrollIntoView({ block: "start" });
  }
  return (
    <>
      <section
        id="resources"
        className="interior-section"
        aria-labelledby="resources-heading"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Start here</p>
            <h2 id="resources-heading" ref={resultsHeading} tabIndex={-1}>
              Practical resources, ready to use.
            </h2>
            <p>
              Our first five guides are available to read, print, or save as a
              PDF using your browser. This collection will grow as new materials
              are published.
            </p>
          </div>
          <fieldset className="resource-filters">
            <legend>Find a resource</legend>
            <label>
              Audience
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              >
                <option value="">All audiences</option>
                {audiences.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Topic
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="">All topics</option>
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Format
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="">All formats</option>
                {formats.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="reset-filter"
              type="button"
              onClick={() => {
                setAudience("");
                setTopic("");
                setFormat("");
              }}
            >
              Reset filters
            </button>
          </fieldset>
          <p
            className="result-count"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {visible.length} {visible.length === 1 ? "resource" : "resources"}
            {audience || topic || format
              ? " matching your filters"
              : " available"}
          </p>
          <div id="resource-results">
            {visible.length ? (
              <ResourceList items={visible} />
            ) : (
              <div className="empty-results">
                <h3>No resources match these filters yet.</h3>
                <p>
                  Try a different audience, topic, or format, or reset the
                  filters to see all five launch guides. Videos, lessons, and
                  teaching toolkits will be added as they are ready.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="interior-section" aria-labelledby="audiences-heading">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Browse by audience</p>
            <h2 id="audiences-heading">A useful place to begin.</h2>
            <p>
              Choose a collection for yourself or someone you support. Many
              guides are useful across more than one audience.
            </p>
          </div>
          <div className="audience-directory">
            {audiences.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => browse("audience", a.id)}
                aria-controls="resource-results"
              >
                <Point />
                <span>
                  <strong>{a.label}</strong>
                  <span>{a.description}</span>
                  <span className="directory-action">
                    View resources <Arrow />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="topic-surface" aria-labelledby="topics-heading">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Browse by topic</p>
            <h2 id="topics-heading">Start with the question on your mind.</h2>
            <p>
              Social engineering means using trust or pressure to influence
              someone’s actions. You do not need technical knowledge to learn
              what to watch for.
            </p>
          </div>
          <ul className="topic-directory">
            {topics.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => browse("topic", t.id)}
                  aria-controls="resource-results"
                >
                  {t.label}
                  <Arrow />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
