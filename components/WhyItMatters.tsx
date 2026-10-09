import { Point } from "./Brand";
const audiences = [
  [
    "Older adults",
    "Navigating scams, fraud, and everyday technology with greater confidence.",
  ],
  [
    "Youth & families",
    "Age-appropriate knowledge about privacy, manipulation, scams, and emerging digital risks.",
  ],
  [
    "Communities with fewer digital safety resources",
    "Education and practical safety support in places where it is hard to find.",
  ],
  [
    "People with limited access to technology or digital training",
    "Tools, training, and support to take part safely in digital life.",
  ],
];
export function WhyItMatters() {
  return (
    <section id="mission" className="section" aria-labelledby="mission-heading">
      <div className="container">
        <div className="two-column mission-intro">
          <div>
            <p className="eyebrow">Why this matters</p>
            <h2 id="mission-heading">
              Digital safety shouldn’t depend on your age, income, ZIP code, or
              technical experience.
            </h2>
          </div>
          <div className="prose">
            <p>
              More of everyday life now happens online, while scams, fraud,
              impersonation, and AI-enabled deception can make ordinary decisions
              harder. People need clear ways to check a request, protect an
              account, and find help after a scam.
            </p>
            <p>
              The ZoraSafe Foundation exists to close that gap, so people can
              take part in digital life with confidence instead of fear.
            </p>
          </div>
        </div>
        <div className="audiences">
          <h3 className="eyebrow">Who our resources are for</h3>
          <ul className="audience-grid">
            {audiences.map(([title, description]) => (
              <li key={title}>
                <Point />
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
