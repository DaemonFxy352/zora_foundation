import Link from "next/link";
import { InteriorPage, PageHero } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Contact the ZoraSafe Foundation about educational resources, developing workshops, partnerships, research, support, or editorial corrections.",
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
    text: "Tell us your audience, learning goals, host setting, and accessibility needs. We welcome pilot and curriculum-development inquiries; sending an inquiry does not reserve a workshop or confirm delivery.",
    subject: "Community training inquiry",
    label: "Discuss Community Training",
  },
  {
    id: "schools-families",
    title: "School & parent education inquiries",
    text: "Discuss future learning for children, teenagers, parents, or educators. Describe the age group and learning goals without sending children’s names or personal incident details.",
    subject: "School and parent education inquiry",
    label: "Discuss School or Family Education",
  },
  {
    id: "support",
    title: "Support inquiries",
    text: "Interested in supporting Foundation education, research, or community initiatives? Start a conversation about possible support. This is not a donation transaction; do not send payment details.",
    subject: "Supporting the Foundation",
    label: "Discuss Supporting the Foundation",
  },
  {
    id: "corrections",
    title: "Editorial corrections",
    text: "Include the page address, the wording you are questioning, and a public source if available. Do not include private evidence or information about other people.",
    subject: "Editorial correction",
    label: "Send an Editorial Correction",
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
              above into the email service you use. The website does not submit
              or save your message, and opening a link does not send an email.
              Include only the information needed to explain your inquiry.
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
