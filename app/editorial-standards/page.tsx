import Link from "next/link";
import { InteriorPage, PageHero } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Editorial standards and corrections",
  "How Foundation educational guidance uses sources, dates and contributor attribution, and how to request a correction.",
  "/editorial-standards",
);
export default function EditorialStandards() {
  return (
    <InteriorPage>
      <PageHero
        path="/editorial-standards"
        eyebrow="Editorial standards"
        title="Clear guidance. Clear responsibility."
        intro="ZoraSafe Foundation publishes practical education for the public. We distinguish source-based guidance from original research and identify what a page can and cannot establish."
      />
      <section className="interior-section">
        <div className="container reading-copy">
          <h2>Sources and scope</h2>
          <p>
            We review source material when preparing guidance and link to the
            public sources used. Primary public-agency guidance is preferred
            where relevant. A citation does not imply that the source endorses
            the Foundation.
          </p>
          <h2>Dates and attribution</h2>
          <p>
            A source-check date records when linked guidance was checked; it
            does not identify a human reviewer or imply editorial approval.
            Publication dates are shown when established. Update dates reflect
            content changes. A content-review date records a check of the text
            and sources; it does not imply independent expert review or formal
            peer review. Named authors, reviewers and credentials appear only
            when verified information is available. Publisher attribution alone
            is not a named author byline.
          </p>
          <h2>Updates and corrections</h2>
          <p>
            Guidance may change as sources, services or risks change. To request
            a correction, email{" "}
            <a href="mailto:hello@zorasafefoundation.org?subject=Editorial%20correction">
              hello@zorasafefoundation.org
            </a>{" "}
            with the page URL, the wording in question and a supporting source
            if available. Please do not send passwords, account numbers or
            sensitive evidence.
          </p>
          <h2>Educational guidance</h2>
          <p>
            These resources are general education, not a substitute for law
            enforcement, financial, legal or other professional advice. Contact
            the affected service or an appropriate professional about your
            situation. The Foundation does not promise loss prevention or
            recovery.
          </p>
          <p>
            <Link href="/education">Explore education resources</Link> or{" "}
            <Link href="/research">read about our research direction</Link>.
          </p>
        </div>
      </section>
    </InteriorPage>
  );
}
