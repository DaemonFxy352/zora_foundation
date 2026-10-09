import Link from "next/link";
import { Arrow, GuidePoint } from "./Brand";
import { HomeImage } from "./HomeImage";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Closing the digital safety knowledge gap.</p>
          <h1 id="hero-heading">Safety through knowledge.</h1>
          <p className="hero-intro">
            Practical digital safety guides for communities and families, with
            research and training pathways in development.
          </p>
          <div className="actions">
            <Link className="button" href="/programs">
              Explore Programs <Arrow />
            </Link>
            <Link className="button button-outline" href="/partner">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-mark">
            <GuidePoint />
          </div>
          <div className="hero-photo">
            <HomeImage name="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
