import { Point } from "./Brand";
import { HomeImage } from "./HomeImage";
const programs = [
  [
    "Community Digital Safety Education",
    "Practical scam, fraud, and privacy education in places people already trust: libraries, senior centers, schools, and community organizations.",
  ],
  [
    "Digital Confidence & Skills Training",
    "Patient, accessible training that builds the skills and confidence to use everyday technology safely.",
  ],
  [
    "Youth & Family Digital Safety",
    "Age-appropriate education on scams, privacy, online manipulation, and AI-generated content.",
  ],
  [
    "Pilots & Technology Access",
    "Proposed pilots to explore access to safety tools, devices, and training materials. No device-distribution or grant application is open.",
  ],
];
export function Programs() {
  return (
    <section
      id="programs"
      className="section"
      aria-labelledby="programs-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Programs & initiatives</p>
            <h2 id="programs-heading">
              Bringing digital safety into communities.
            </h2>
          </div>
          <p>
            Four program areas in development for learning through trusted local
            organizations. Workshops are not currently scheduled or bookable.
          </p>
        </div>
        <div className="programs-layout">
          <div className="program-photo photo">
            <HomeImage name="programs" />
          </div>
          <div>
            <div className="program-grid">
              {programs.map(([name, description], i) => (
                <article key={name}>
                  <div className="program-index">
                    <Point />
                    <span className="index">0{i + 1}</span>
                  </div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="program-note">
              Librarians, educators, senior-center staff and community groups can
              read and print our public guides now. Structured training and
              facilitator materials are still in development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
