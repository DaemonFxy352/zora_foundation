import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
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
        <p>
          This is an accessibility goal, not a claim of certified conformance.
          Manual testing with assistive technologies and feedback from visitors
          are still needed to identify barriers.
        </p>
        <h2>Using this website</h2>
        <p>
          You can skip directly to the main content, navigate menus using a
          keyboard, and use your browser’s text size and zoom controls. Images
          include text descriptions, and the website respects reduced-motion
          preferences.
        </p>
        <h2>Reading and printing guides</h2>
        <p>
          The <Link href="/education#resources">digital safety resource library</Link>{" "}
          links to HTML guides you can read without downloading a document.
          Each guide has links to its warning signs, protective steps, recovery
          help, and sources. Use “Print or save as PDF” to open your browser’s
          print dialog; printer settings and PDF accessibility depend on your
          browser and device. The HTML guide remains available if a printed
          copy does not meet your needs.
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
