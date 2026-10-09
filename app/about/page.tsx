import Link from "next/link";
import { InteriorPage, PageHero, CTASection } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "The ZoraSafe Foundation’s mission is closing the digital safety knowledge gap through public-interest education, research, prevention, and access.",
  "/about",
);
export default function AboutPage() {
  return (
    <InteriorPage>
      <PageHero
        path="/about"
        eyebrow="About the Foundation"
        title="Closing the digital safety knowledge gap."
        intro="Safety through knowledge. We believe people should be able to take part in digital life with confidence, regardless of age, income, ZIP code, or technical experience."
      />
      <section id="mission" className="interior-section">
        <div className="container reports-section">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Knowledge should be within reach.</h2>
          </div>
          <div className="reading-copy">
            <p>
              More of everyday life happens online, while scams, impersonation,
              and AI-enabled deception change quickly. Access to meaningful
              digital safety education, training, and tools is uneven.
            </p>
            <p>
              The Foundation exists to help close that gap. Our public-interest
              focus starts with public educational guides, alongside plans for
              research, prevention programs, technology access and collaboration.
            </p>
            <p>
              We aim to make useful knowledge available in the places people
              already turn for help, with guidance that respects their
              experience and independence.
            </p>
          </div>
        </div>
      </section>
      <section className="topic-surface">
        <div className="container">
          <div className="section-intro">
            <h2>What guides the work.</h2>
          </div>
          <div className="editorial-grid">
            <article>
              <h3>Practical education</h3>
              <p>
                Plain language, realistic examples, and actions people can use
                when a message or request does not feel right.
              </p>
              <Link href="/education" className="text-link">
                Explore Education & Resources
              </Link>
            </article>
            <article>
              <h3>Research with a purpose</h3>
              <p>
                Research questions and planned evaluation to test what people
                understand and can use. These are aims, not measured results.
              </p>
              <Link href="/research" className="text-link">
                Our Research Approach
              </Link>
            </article>
            <article>
              <h3>Access & confidence</h3>
              <p>
                Learning should make room for different devices, abilities,
                experiences, and levels of access to technology.
              </p>
              <Link href="/programs" className="text-link">
                Explore Programs
              </Link>
            </article>
            <article>
              <h3>Community relationships</h3>
              <p>
                Local organizations and trusted messengers bring knowledge of
                the people, needs, and questions in their communities.
              </p>
              <Link href="/partner" className="text-link">
                Ways to Partner
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="interior-section">
        <div className="container section-intro">
          <h2>A public-interest mission.</h2>
          <p>
            Our public-interest mission focuses on practical digital safety
              education. We welcome proposals for future collaboration from
              organizations that share that purpose.
          </p>
          <Link className="text-link" href="/leadership">
            Leadership information
          </Link>
        </div>
      </section>
      <CTASection
        title="Make knowledge easier to reach."
        href="/partner"
        label="Partner With Us"
      >
        <p>
          Help shape education, research, and practical access around the people
          your organization serves.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
