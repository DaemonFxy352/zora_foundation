import Link from "next/link";
import { Arrow } from "./Brand";
const areas = [
  {
    name: "Educate",
    text: "Accessible scam, fraud, and digital safety education for people of every age.",
    link: "Education & resources",
    href: "/education",
  },
  {
    name: "Equip",
    text: "Practical training, resources, and tools for the people and organizations that need them.",
    link: "Programs & initiatives",
    href: "/programs",
  },
  {
    name: "Research",
    text: "Research into how scams are changing and which prevention efforts actually work.",
    link: "Research",
    href: "/research",
  },
  {
    name: "Collaborate",
    text: "Partnerships that bring digital safety programs to more communities.",
    link: "Partner with us",
    href: "/partner",
  },
];
export function WhatWeDo() {
  return (
    <section id="work" className="section wash" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="work-heading">
              Four areas of work, one public-interest mission.
            </h2>
          </div>
          <p>
            Each area supports the others. Communities tell us what they need,
            research shows what works, and programs put it into practice.
          </p>
        </div>
        <div className="work-list">
          {areas.map((area, i) => (
            <article key={area.name}>
              <div className="work-title">
                <span className="index">0{i + 1}</span>
                <h3>{area.name}</h3>
              </div>
              <p>{area.text}</p>
              <Link className="text-link" href={area.href}>
                {area.link}
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
