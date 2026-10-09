import Link from "next/link";
import { programPathways } from "@/data/program-pathways";
import { InteriorPage, PageHero, CTASection } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Digital safety education programs",
  "Explore planned digital safety workshops for schools, families, libraries, and older adults. Read public guides now or inquire about future pilot development.",
  "/programs",
);
export default function ProgramsPage() {
  return (
    <InteriorPage>
      <PageHero
        path="/programs"
        eyebrow="Programs & Initiatives"
        title="Bringing digital safety into communities."
        intro="We are developing practical digital safety education for families, schools, older adults, and community organizations. We welcome inquiries about pilot workshops, curriculum development, and future hosting opportunities. Workshops are not currently scheduled or bookable."
      />
      <section className="interior-section" aria-labelledby="program-status">
        <div className="container section-intro">
          <h2 id="program-status">Read a guide now; help shape a future workshop.</h2>
          <p>
            The Foundation’s <Link href="/education#resources">free digital safety guides</Link>{" "}
            are available to read and print. They cover scam recognition,
            checking unexpected requests, safer accounts, and family conversations.
            Instructor-led workshops, facilitator curricula, and technology-access
            pilots are in development. There is no registration, certification,
            device-distribution scheme, or public workshop schedule.
          </p>
          <nav aria-label="Program development pathways">
            <ul>
              {programPathways.map((pathway) => (
                <li key={pathway.id}><a href={`#${pathway.id}`}>{pathway.title}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="community-pathways"
        className="interior-section"
        aria-labelledby="pathways-heading"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Program development</p>
            <h2 id="pathways-heading">Shape learning around your community.</h2>
            <p>
              These are planning pathways, not scheduled or bookable workshops.
              The objectives describe skills we would aim to teach, not measured
              outcomes. Scope, staffing, accessibility, and availability must be
              agreed with a prospective host.
            </p>
          </div>
          <div className="program-details">
            {programPathways.map((pathway) => (
              <section
                className="program-detail"
                key={pathway.id}
                aria-labelledby={pathway.id}
              >
                <div>
                  <h3 id={pathway.id}>{pathway.title}</h3>
                  <p>{pathway.audience}</p>
                  <p>
                    <Link href={`/education/${pathway.resource}`}>
                      {pathway.label}
                    </Link>{" "}
                    is available to read and print now.
                  </p>
                </div>
                <div>
                  <dl className="program-facts">
                    <dt>Learning objective</dt><dd>{pathway.objective}</dd>
                    <dt>Possible format</dt><dd>{pathway.format}</dd>
                    <dt>Accessibility planning</dt><dd>{pathway.access}</dd>
                  </dl>
                  <Link className="text-link" href="/contact#training">
                    Discuss {pathway.title.toLowerCase()}
                  </Link>
                </div>
              </section>
            ))}
          </div>
          <section aria-labelledby="pilot-inquiry">
            <h2 id="pilot-inquiry">How to inquire about a future pilot</h2>
            <ol>
              <li>Choose a learning need and try a relevant public guide first.
                A school might start with teen privacy; a senior center might
                start with checking an unexpected phone call.</li>
              <li>Describe the audience, age range, learning goals, language,
                accessibility needs, and proposed host setting. Use fictional
                examples instead of participants’ private experiences.</li>
              <li>Use the <Link href="/contact#training">community training inquiry instructions</Link>{" "}
                or <Link href="/contact#schools-families">school and family education contact</Link>.
                An inquiry does not reserve a session or confirm that the
                Foundation can deliver it. The contact page explains the
                current limits of email delivery.</li>
            </ol>
            <p>Any future pilot would need agreement on scope, qualified
              facilitation, safeguarding, accessibility, and participant feedback.
              No fees, dates, or delivery commitments are announced here.</p>
          </section>
        </div>
      </section>
      <section className="topic-surface">
        <div className="container section-intro">
          <p className="eyebrow">The trusted-messenger model</p>
          <h2>Knowledge travels through people we trust.</h2>
          <p>
            Librarians, educators, senior-center staff, nonprofit teams,
            caregivers and volunteers can use our public guides as a starting
            point for learning. A host-led training program would require
            additional planning and qualified facilitation.
          </p>
          <p>
            Our{" "}
            <Link href="/education#resources">
              practical digital safety guides
            </Link>{" "}
            are available now. Facilitator materials and structured training are
            in development; partners can help us understand what would make them
            useful in practice. For a group discussion, try{" "}
            <Link href="/education/family-emergency-scams">
              family emergency verification
            </Link>{" "}
            or the{" "}
            <Link href="/education/phone-impersonation">
              phone impersonation guide
            </Link>
            . Each includes a practice prompt and print support; these are
            guides, not a completed facilitator curriculum.
          </p>
        </div>
      </section>
      <CTASection
        title="Start with your community’s needs."
        href="/contact#training"
        label="Discuss a Future Workshop"
      >
        <p>
          Tell us who you serve, what people are asking, and what a useful
          program could look like.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
