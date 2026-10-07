import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "@/components/Brand";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
        {children}
      </div>
    </header>
  );
}
export function InteriorPage({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" className="interior" tabIndex={-1}>
      {children}
    </main>
  );
}
export function CTASection({
  title,
  children,
  href,
  label,
}: {
  title: string;
  children: ReactNode;
  href: string;
  label: string;
}) {
  return (
    <section className="interior-cta">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <div className="reading-copy">{children}</div>
        </div>
        <Link className="button" href={href}>
          {label}
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
export function EditorialRows({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="editorial-rows">
      {items.map((item, i) => (
        <article key={item.title}>
          <span className="index" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
