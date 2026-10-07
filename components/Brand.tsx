import Link from "next/link";

export function GuidePoint({ reversed = false }: { reversed?: boolean }) {
  return (
    <svg viewBox="0 0 292 173" aria-hidden="true" focusable="false">
      <polygon
        points="0,0 138,106 138,173 0,66"
        fill={reversed ? "#FFFFFF" : "#0F2A44"}
      />
      <polygon
        points="154,106 292,0 292,66 154,173"
        fill={reversed ? "#1FCBAE" : "#1A9499"}
      />
      <polygon points="120,46 172,46 146,78" fill="#ED4C1F" />
    </svg>
  );
}

// Geometry and lockup proportions from the final Foundation identity board and v5 export.
export function Brand({ reversed = false }: { reversed?: boolean }) {
  return (
    <Link
      className={`brand${reversed ? " brand-reversed" : ""}`}
      href="/"
      aria-label="ZoraSafe Foundation home"
    >
      <GuidePoint reversed={reversed} />
      <span className="brand-type" aria-hidden="true">
        <span className="brand-name">ZoraSafe</span>
        <span className="brand-descriptor">
          {"FOUNDATION".split("").map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </span>
      </span>
    </Link>
  );
}

export function Point() {
  return (
    <svg
      className="point"
      width="18"
      height="11"
      viewBox="0 0 52 32"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h52L26 32Z" fill="currentColor" />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg
      className="arrow"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
