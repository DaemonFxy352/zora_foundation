import Link from "next/link";
import {
  InteriorPage,
  PageHero,
  CTASection,
  EditorialRows,
} from "@/components/interior/Page";
import { ResourceBrowser } from "@/components/interior/ResourceBrowser";
import { formats } from "@/data/resources";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Education & Resources",
  "Practical digital safety guides, checklists, and training pathways for individuals, families, caregivers, and community organizations.",
  "/education",
);
const training = [
  {
    title: "Community Workshops",
    text: "We are developing in-person and virtual sessions with trusted local organizations. A workshop can make space to discuss examples, ask questions, and practice checking an unexpected request.",
  },
  {
    title: "Digital Confidence Training",
    text: "Patient, accessible instruction can help people use everyday technology safely. We are building a training approach that leaves time to repeat steps, use familiar devices, and learn without embarrassment.",
  },
  {
    title: "Youth & Family Sessions",
    text: "We are developing age-appropriate conversations about privacy, manipulation, scams, and AI-generated content, with practical habits that families can use together.",
  },
  {
    title: "Train-the-Trainer",
    text: "We are developing preparation and materials for librarians, educators, nonprofit teams, senior-center staff, and other trusted messengers. The goal is to support local teaching, not require technical expertise.",
  },
  {
    title: "Custom Community Training",
    text: "We can collaborate on a training plan around a community’s goals, language needs, accessibility requirements, and existing services. Availability and scope are discussed with each prospective partner.",
  },
];
export default function Education() {
  return (
    <InteriorPage>
      <PageHero
        path="/education"
        eyebrow="Education & Resources"
        title="Digital safety knowledge people can use."
        intro="Practical, plain-language resources designed to help people recognize risk, make safer decisions, and navigate everyday technology with greater confidence."
      >
        <div className="actions">
          <a className="button" href="#resources">
            Explore Resources
          </a>
          <Link className="button button-outline" href="/contact#training">
            Bring Training to Your Community
          </Link>
        </div>
      </PageHero>
      <ResourceBrowser />
      <section
        className="interior-section format-section"
        aria-labelledby="formats-heading"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Ways to learn</p>
            <h2 id="formats-heading">Useful in a moment. Useful in a group.</h2>
            <p>
              Quick guides and checklists are available now. You can print each
              guide; dedicated download files and additional formats are
              planned.
            </p>
          </div>
          <dl className="format-directory">
            {formats.map((f) => (
              <div key={f.id}>
                <dt>{f.label}</dt>
                <dd>
                  {f.description}
                  <span>{f.status}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section
        id="training"
        className="interior-section"
        aria-labelledby="training-heading"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Training & community learning</p>
            <h2 id="training-heading">
              Training that meets people where they are.
            </h2>
            <p>
              We are developing these learning pathways with community partners.
              There is no public workshop schedule or registration system yet.
              Tell us what your community needs so we can explore the right
              starting point.
            </p>
          </div>
          <EditorialRows items={training} />
        </div>
      </section>
      <CTASection
        title="Help shape learning in your community."
        href="/contact#training"
        label="Bring Training to Your Community"
      >
        <p>
          Share who you serve, the questions you hear, and the support that
          would make training accessible.
        </p>
      </CTASection>
    </InteriorPage>
  );
}
