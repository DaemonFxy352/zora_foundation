import Link from "next/link";
import { InteriorPage, PageHero } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Contact the ZoraSafe Foundation about general questions, partnerships, community training, and research collaboration.",
  "/contact",
);
const inquiries = [
  {
    id: "general",
    title: "General inquiries",
    text: "Questions about the Foundation, organizational information, resource feedback, or help accessing our materials.",
    subject: "General Foundation inquiry",
    label: "Email a General Inquiry",
  },
  {
    id: "partnerships",
    title: "Partnership inquiries",
    text: "Tell us about your organization, who you serve, and the type of collaboration you would like to explore.",
    subject: "Foundation partnership inquiry",
    label: "Discuss a Partnership",
  },
  {
    id: "training",
    title: "Training & community program inquiries",
    text: "Share your location, audience, learning goals, accessibility needs, and potential timing. We are developing training pathways and can discuss what may be possible.",
    subject: "Community training inquiry",
    label: "Discuss Community Training",
  },
  {
    id: "research",
    title: "Research collaboration inquiries",
    text: "Describe your research question, relevant community experience, or interest in evaluating education and prevention approaches.",
    subject: "Research collaboration inquiry",
    label: "Discuss Research Collaboration",
  },
];
export default function ContactPage() {
  return (
    <InteriorPage>
      <PageHero
        path="/contact"
        eyebrow="Contact"
        title="Start a conversation."
        intro="Have a question or an idea for making digital safety knowledge more accessible? Choose the inquiry that fits, or email us directly."
      >
        <a
          className="contact-address"
          href="mailto:hello@zorasafefoundation.org"
        >
          hello@zorasafefoundation.org
        </a>
      </PageHero>
      <section className="interior-section">
        <div className="container">
          <h2 className="contact-heading">How can we help?</h2>
          <div className="contact-directory">
            {inquiries.map((item) => (
              <section
                key={item.id}
                id={item.id}
                aria-labelledby={`${item.id}-heading`}
              >
                <h3 id={`${item.id}-heading`}>{item.title}</h3>
                <p>{item.text}</p>
                <a
                  className="text-link"
                  href={`mailto:hello@zorasafefoundation.org?subject=${encodeURIComponent(item.subject)}`}
                >
                  {item.label}
                </a>
              </section>
            ))}
          </div>
          <div className="contact-note reading-copy">
            <p>
              These links open your email app. You can also copy the address
              above into the email service you use.
            </p>
            <p>
              Please do not send passwords, one-time codes, account numbers, or
              copies of identity documents or intimate images. The Foundation’s
              inbox is for
              education and organizational inquiries, not emergency response or
              account recovery or reporting suspected child sexual exploitation.
            </p>
            <p>
              For money already sent, contact your bank or payment provider
              immediately; our{" "}
              <Link href="/education/after-a-scam">after-a-scam guide</Link>{" "}
              explains next steps. Report suspected child sexual exploitation to{" "}
              <a href="https://www.missingkids.org/gethelpnow/cybertipline">
                NCMEC’s CyberTipline
              </a>.
              For immediate physical danger, contact local emergency services.
              Do not wait for an email reply from the Foundation.
            </p>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
