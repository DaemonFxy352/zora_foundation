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
            Research that leads to real-world prevention, and programs that
            bring it to communities, families, and the people who serve them.
          </p>
          <div className="actions">
            <a className="button" href="#programs">
              Explore Programs <Arrow />
            </a>
            <a className="button button-outline" href="#partner">
              Partner With Us
            </a>
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
