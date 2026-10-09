import Link from "next/link";
import { Brand } from "./Brand";
const columns = [
  {
    title: "Our work",
    links: [
      ["Programs", "/programs"],
      ["Research", "/research"],
      ["Education & Resources", "/education"],
    ],
  },
  {
    title: "About",
    links: [
      ["Our Mission", "/about#mission"],
      ["About the Foundation", "/about"],
      ["Leadership", "/leadership"],
    ],
  },
  {
    title: "Get involved",
    links: [
      ["Partner With Us", "/partner"],
      ["Support Our Work", "/support"],
      ["Contact", "/contact"],
    ],
  },
];
export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-intro">
            <Brand reversed />
            <p>
              Practical digital safety guides for the public, with training and
              research pathways in development.
            </p>
            <p className="relationship">
              The Foundation may work with ZoraSafe, Inc. and other technology
              partners. Its public-interest mission is broader than any single
              technology or company.
            </p>
            <a className="email" href="mailto:hello@zorasafefoundation.org">
              hello@zorasafefoundation.org
            </a>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={`${column.title} footer`}>
              <h2 className="eyebrow">{column.title}</h2>
              {column.links.map(([label, href]) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ZoraSafe Foundation</span>
          <a href="mailto:hello@zorasafefoundation.org?subject=Privacy%20inquiry">
            Privacy inquiry
          </a>
          <a href="mailto:hello@zorasafefoundation.org?subject=Terms%20inquiry">
            Terms inquiry
          </a>
          <Link href="/accessibility">Accessibility statement</Link>
        </div>
      </div>
    </footer>
  );
}
