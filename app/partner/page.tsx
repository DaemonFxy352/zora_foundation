import {
  InteriorPage,
  PageHero,
  CTASection,
  EditorialRows,
} from "@/components/interior/Page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Partner With Us",
  "Explore community education, training, research, and access partnerships with the ZoraSafe Foundation.",
  "/partner",
);
const collaborations = [
  {
    title: "Host & extend learning",
    text: "Explore hosting workshops, supporting community education, and extending training through libraries, nonprofits, schools, and other familiar local settings.",
  },
  {
    title: "Develop & evaluate research",
    text: "Co-develop research questions, evaluate interventions, and connect prevention work with community experience. Universities and researchers can help shape methods and useful findings.",
  },
  {
    title: "Pilot practical prevention",
    text: "Identify a specific need, define a manageable pilot, and learn together before expanding. Community organizations and government agencies can help identify local priorities.",
  },
  {
    title: "Support access & trusted messengers",
    text: "Foundations and responsible corporate partners can explore funding tools, materials, and train-the-trainer preparation so knowledge reaches more people through trusted local leaders.",
  },
];
export default function PartnerPage() {
  return (
    <InteriorPage>
      <PageHero
        path="/partner"
        eyebrow="Partner With Us"
        title="Building safer communities takes all of us."
        intro="We welcome conversations with community organizations, nonprofits, libraries, universities, researchers, government agencies, foundations, and responsible corporate partners."
      />
      <section className="interior-section">
        <div className="container">
          <div className="section-intro">
            <h2>Different strengths. A shared purpose.</h2>
            <p>
              A useful partnership starts with a community need and a clear role
              for everyone involved. These are ways we can explore working
              together. The examples below are invitations to discuss future work,
              not a list of existing institutional partnerships.
            </p>
          </div>
          <EditorialRows items={collaborations} />
        </div>
      </section>
      <section className="topic-surface">
        <div className="container reports-section">
          <div>
            <p className="eyebrow">A thoughtful starting point</p>
            <h2>Tell us what would be useful.</h2>
          </div>
          <div className="reading-copy">
            <p>
              Share who you serve, the digital safety questions people ask, and
              what you hope to change. Let us know about accessibility or
              language needs, your location, and any timing constraints. Use
              general examples; please do not send participant records or
              personal incident evidence.
            </p>
            <p>
              We can then discuss scope, capacity, and next steps. An inquiry
              does not commit either organization to a program, and delivery is
              subject to planning and available resources.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Let’s begin with a conversation."
        href="/contact#partnerships"
        label="Start a Conversation"
      >
        <p>
          Bring an idea, a community need, or a question. A fully developed
          proposal is not required.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
