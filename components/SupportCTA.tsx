import Link from "next/link";
export function SupportCTA() {
  return (
    <section
      id="support"
      className="section support"
      aria-labelledby="support-heading"
    >
      <div className="container">
        <h2 id="support-heading">
          Help bring digital safety education where it’s needed most.
        </h2>
        <p>
          Your support can help fund community workshops, educational resources,
          research, technology access, and training for people and organizations
          that might otherwise go without them.
        </p>
        <div className="actions">
          <Link className="button" href="/support">
            Support the Foundation
          </Link>
          <Link className="button button-outline" href="/partner">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
