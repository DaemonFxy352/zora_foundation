import Link from "next/link";
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
            We welcome proposals from community organizations, nonprofits,
            universities, government, foundations and responsible industry
            partners to help develop digital safety education, research and access.
          </p>
          <Link className="button" href="/partner">
            Partner With the Foundation <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
