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
    "Community pilots that put safety tools, devices, and training materials within reach of those who would otherwise go without.",
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
            Four program areas, delivered in person and close to home through
            organizations people already trust.
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
              We also equip librarians, educators, senior-center staff,
              nonprofit teams, and other trusted local leaders with resources
              they can use in their own communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
