import Link from "next/link";
import { InteriorPage, PageHero, CTASection } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Leadership",
  "Leadership information for the ZoraSafe Foundation, with a contact pathway for organizational and governance inquiries.",
  "/leadership",
);
export default function LeadershipPage() {
  return (
    <InteriorPage>
      <PageHero
        eyebrow="Leadership"
        title="People behind a public-interest mission."
        intro="Our work is centered on practical education, community relationships, and research that helps prevent harm."
      />
      <section className="interior-section">
        <div className="container reports-section">
          <div>
            <p className="eyebrow">Leadership & governance</p>
            <h2>Leadership information coming soon.</h2>
          </div>
          <div className="reading-copy">
            <p>
              We will publish confirmed leadership names, roles, and biographies
              here when those details are ready for public release.
            </p>
            <p>
              If you need organizational or governance information for a
              prospective partnership, please contact the Foundation directly.
              We can discuss the information your review requires.
            </p>
            <Link href="/about" className="text-link">
              Read about our mission
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="Have an organizational question?"
        href="/contact"
        label="Contact the Foundation"
      >
        <p>
          Tell us what information you need and the context for your inquiry.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
