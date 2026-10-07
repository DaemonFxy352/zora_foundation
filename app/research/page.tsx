import {
  InteriorPage,
  PageHero,
  CTASection,
  EditorialRows,
} from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Research",
  "Explore the Foundation’s Study, Translate, Prevent model and research priorities for practical digital safety education and prevention.",
  "/research",
);
const model = [
  {
    title: "Study",
    text: "Investigate emerging scams, fraud patterns, AI-enabled threats, and how people make decisions under pressure. Community experience helps identify the questions worth asking.",
  },
  {
    title: "Translate",
    text: "Turn findings into plain-language curriculum, training, and program design. A finding becomes useful when people can understand it and apply it to a real decision.",
  },
  {
    title: "Prevent",
    text: "Deliver learning in communities, evaluate the results, and improve what we teach. We want to understand whether people leave better able to recognize risk and make safer decisions.",
  },
];
const priorities = [
  [
    "Changing threats",
    "Emerging scam patterns, fraud trends, AI-enabled threats, and the ways impersonation reaches people.",
  ],
  [
    "People & decisions",
    "Behavioral decision-making, digital literacy, community-specific risks, and the experiences of people affected by scams.",
  ],
  [
    "Recovery & support",
    "Victimization and recovery, including barriers to seeking help and ways education can support people without blame.",
  ],
  [
    "What prevention changes",
    "Prevention effectiveness and education program evaluation: what people understand, what they can do, and what support they still need.",
  ],
];
export default function ResearchPage() {
  return (
    <InteriorPage>
      <PageHero
        eyebrow="Research & Impact"
        title="Research that leads to real-world prevention."
        intro="Our research direction connects what communities experience with what educators can teach. The goal is practical prevention, informed by evidence and improved through feedback."
      />
      <section className="interior-section">
        <div className="container">
          <div className="section-intro">
            <h2>From a question to a safer decision.</h2>
            <p>
              This is the model guiding our developing research and evaluation
              work.
            </p>
          </div>
          <EditorialRows items={model} />
        </div>
      </section>
      <section className="topic-surface">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Research priorities</p>
            <h2>Questions grounded in everyday life.</h2>
            <p>
              These areas describe our intended focus, not a list of completed
              studies.
            </p>
          </div>
          <div className="editorial-grid">
            {priorities.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="interior-section" id="reports">
        <div className="container reports-section">
          <div>
            <p className="eyebrow">Reports & publications</p>
            <h2>A place for findings people can use.</h2>
          </div>
          <div className="reading-copy">
            <p>Research and reports will appear here as they are published.</p>
            <p>
              There are no Foundation reports available yet. We intend to share
              plain-language findings alongside the questions asked, methods
              used, and limits of what the results can tell us.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Help turn a useful question into better prevention."
        href="/contact#research"
        label="Discuss Research Collaboration"
      >
        <p>
          We welcome conversations with researchers, universities, and community
          partners about relevant questions and responsible evaluation.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
