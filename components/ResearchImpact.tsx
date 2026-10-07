import Link from "next/link";
import { Arrow, Point } from "./Brand";
import { HomeImage } from "./HomeImage";
const steps = [
  [
    "Study",
    "Investigate emerging scams, fraud patterns, AI-enabled threats, and how people make decisions under pressure.",
  ],
  [
    "Translate",
    "Turn findings into plain-language curriculum, training, and program design.",
  ],
  [
    "Prevent",
    "Deliver it in communities, evaluate the results, and improve what we teach.",
  ],
];
export function ResearchImpact() {
  return (
    <section
      id="research"
      className="section wash"
      aria-labelledby="research-heading"
    >
      <div className="container two-column research-layout">
        <div>
          <p className="eyebrow">Research & impact</p>
          <h2 id="research-heading">
            Research that leads to real-world prevention.
          </h2>
          <ol className="research-steps">
            {steps.map(([name, text]) => (
              <li key={name}>
                <Point />
                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="research-note">
            We evaluate programs to understand whether people leave better able
            to recognize risk and make safer decisions.
          </p>
          <Link className="text-link" href="/research">
            Explore Research <Arrow />
          </Link>
        </div>
        <div className="research-photo photo">
          <HomeImage name="research" />
        </div>
      </div>
    </section>
  );
}
