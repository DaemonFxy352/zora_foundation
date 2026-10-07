import { Arrow } from "./Brand";
export function Partnerships() {
  return (
    <section
      id="partner"
      className="section partnerships"
      aria-labelledby="partner-heading"
    >
      <div className="container two-column">
        <div>
          <p className="eyebrow">Partnerships</p>
          <h2 id="partner-heading">
            Building safer communities takes all of us.
          </h2>
        </div>
        <div className="prose">
          <p>
            We work with community organizations, nonprofits, universities,
            government, foundations, and responsible industry partners to expand
            digital safety education, research, and access.
          </p>
          <a
            className="button"
            href="mailto:hello@zorasafefoundation.org?subject=Foundation%20partnership"
          >
            Partner With the Foundation <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
