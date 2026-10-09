import {
  InteriorPage,
  PageHero,
  EditorialRows,
} from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Support Our Work",
  "Learn how support can help develop community workshops, education, research, training materials, and technology access.",
  "/support",
);
const uses = [
  {
    title: "Learning people can use",
    text: "Community workshops, plain-language educational resources, and training materials that help people practice safer decisions.",
  },
  {
    title: "Research that improves prevention",
    text: "Research, program evaluation, and translating findings into practical teaching and resources.",
  },
  {
    title: "Access & local capacity",
    text: "Technology access, pilot programs, community partnerships, and preparation for trusted local educators and facilitators.",
  },
];
export default function SupportPage() {
  return (
    <InteriorPage>
      <PageHero
        path="/support"
        eyebrow="Support Our Work"
        title="Help bring digital safety education where it’s needed most."
        intro="Support can help us develop useful resources, learn what works, and make practical education more accessible through community relationships."
      />
      <section className="interior-section">
        <div className="container">
          <div className="section-intro">
            <h2>What support can make possible.</h2>
            <p>
              These are areas of work that support can help fund. Specific
              opportunities and intended uses can be discussed with the
              Foundation.
            </p>
          </div>
          <EditorialRows items={uses} />
        </div>
      </section>
      <section className="topic-surface">
        <div className="container reports-section">
          <div>
            <p className="eyebrow">Supporting the Foundation</p>
            <h2>Begin with a conversation.</h2>
          </div>
          <div className="reading-copy">
            <p>
              Online giving is not available on this site. To discuss possible
              support and confirm current arrangements, contact the Foundation.
            </p>
            <p>
              Tell us which area of work interests you and whether you are
              considering individual, foundation, or organizational support. We
              can discuss current needs and next steps. Please do not email payment-card
              details or bank account information.
            </p>
            <a
              className="button"
              href="mailto:hello@zorasafefoundation.org?subject=Supporting%20the%20Foundation"
            >
              Discuss Supporting the Foundation
            </a>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
