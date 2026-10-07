import { InteriorPage, PageHero, CTASection } from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Programs",
  "Four Foundation program areas connecting digital safety education, practical skills, family learning, and technology access with communities.",
  "/programs",
);
const programs = [
  {
    name: "Community Digital Safety Education",
    intro:
      "Plain-language learning about scams, fraud, privacy, and everyday digital decisions, offered through places people already know and trust.",
    audience:
      "Older adults, families, caregivers, and communities with fewer digital safety resources.",
    activities: [
      "Guided conversations about suspicious calls and messages",
      "Practice using a separate channel to verify a request",
      "Printed take-home guidance and small-group discussion",
    ],
    partner:
      "A library, senior center, school, or nonprofit can help identify local questions, plan an accessible setting, and shape examples that feel relevant.",
  },
  {
    name: "Digital Confidence & Skills Training",
    intro:
      "Patient instruction that connects practical technology skills with safer habits. People need room to ask questions and repeat steps without being rushed.",
    audience:
      "People learning to use new devices or online services, and anyone who wants more confidence with everyday technology.",
    activities: [
      "Practice finding account settings and recognizing sign-in prompts",
      "Understand password managers and recovery options",
      "Learn how to find an organization’s genuine contact information",
    ],
    partner:
      "Partners can share common learning barriers, device-access needs, and preferred session formats. We can explore a pace and approach that work for participants.",
  },
  {
    name: "Youth & Family Digital Safety",
    intro:
      "Age-appropriate learning that helps young people and adults talk about scams, privacy, online manipulation, and AI-generated content.",
    audience:
      "Young people, parents, caregivers, educators, and organizations working with families.",
    activities: [
      "Family conversations about unexpected requests and online trust",
      "Practice asking a trusted adult for help",
      "Discuss what a photo, video, or familiar voice can and cannot prove",
    ],
    partner:
      "Schools and family-serving groups can help shape age-appropriate examples, accessible materials, and ways to involve caregivers without blame or fear.",
  },
  {
    name: "Pilots & Technology Access",
    intro:
      "Small, carefully scoped pilots can explore whether tools, devices, and training materials help people put safer habits into practice.",
    audience:
      "Communities facing barriers to devices, practical safety tools, or training opportunities.",
    activities: [
      "Identify an access barrier with a local partner",
      "Test an approach with clear goals and participant feedback",
      "Evaluate what people can use independently after a pilot",
    ],
    partner:
      "Partners can identify needs, discuss available resources, and help define what a useful pilot would measure. No device-distribution or grant application is currently open.",
  },
];
export default function ProgramsPage() {
  return (
    <InteriorPage>
      <PageHero
        eyebrow="Programs & Initiatives"
        title="Bringing digital safety into communities."
        intro="Four program areas connect knowledge with practice. We are developing programs with community partners, beginning with the needs people encounter in daily life."
      />
      <section className="interior-section">
        <div className="container program-details">
          {programs.map((p, i) => (
            <section
              className="program-detail"
              key={p.name}
              aria-labelledby={`program-${i}`}
            >
              <div>
                <p className="eyebrow">Program area 0{i + 1}</p>
                <h2 id={`program-${i}`}>{p.name}</h2>
                <p>{p.intro}</p>
              </div>
              <div>
                <h3>Who it can serve</h3>
                <p>{p.audience}</p>
                <h3>Activities we can explore</h3>
                <ul>
                  {p.activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <h3>How a partner can participate</h3>
                <p>{p.partner}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="topic-surface">
        <div className="container section-intro">
          <p className="eyebrow">The trusted-messenger model</p>
          <h2>Knowledge travels through people we trust.</h2>
          <p>
            We equip librarians, educators, senior-center staff, nonprofit
            teams, caregivers, volunteers, and other trusted local leaders with
            materials they can use in their own communities.
          </p>
          <p>
            Our launch guides are available now. Facilitator materials and
            structured training are in development; partners can help us
            understand what would make them useful in practice.
          </p>
        </div>
      </section>
      <CTASection
        title="Start with your community’s needs."
        href="/partner"
        label="Partner With Us"
      >
        <p>
          Tell us who you serve, what people are asking, and what a useful
          program could look like.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
