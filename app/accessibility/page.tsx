import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Accessibility statement",
  "How ZoraSafe Foundation supports accessible digital safety education, and how to request help or report a website accessibility issue.",
  "/accessibility",
);
export default function Accessibility() {
  return (
    <main id="main-content" tabIndex={-1} className="section">
      <div className="container policy">
        <p className="eyebrow">ZoraSafe Foundation</p>
        <h1>Accessibility statement</h1>
        <p>
          Digital safety knowledge should be accessible to everyone. We aim to
          make this website usable with keyboards, screen readers, and browser
          zoom, and to follow the Web Content Accessibility Guidelines (WCAG)
          2.2 at Level AA.
        </p>
        <h2>Using this website</h2>
        <p>
          You can skip directly to the main content, navigate menus using a
          keyboard, and use your browser’s text size and zoom controls. Images
          include text descriptions, and the website respects reduced-motion
          preferences.
        </p>
        <h2>Help us improve</h2>
        <p>
          Accessibility is ongoing work. If something prevents you from using
          this site, email{" "}
          <a href="mailto:hello@zorasafefoundation.org?subject=Website%20accessibility">
            hello@zorasafefoundation.org
          </a>
          . Please include the page, the issue you encountered, and any browser
          or assistive technology details you are comfortable sharing. You can
          also contact us to request information in an alternative format.
        </p>
      </div>
    </main>
  );
}
