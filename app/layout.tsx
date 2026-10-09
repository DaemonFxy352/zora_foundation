import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { organization, website } from "@/lib/structured-data";
import { siteUrl as canonicalOrigin, socialImage } from "@/lib/metadata";
import "./globals.css";
import "./interior.css";
const inter = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});
const siteUrl = `${canonicalOrigin}/`;
const description =
  "Safety through knowledge. Research that leads to real-world prevention.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZoraSafe Foundation",
    template: "%s | ZoraSafe Foundation",
  },
  description,
  alternates: { canonical: siteUrl },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ZoraSafe Foundation",
    title: "ZoraSafe Foundation",
    description,
    locale: "en_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZoraSafe Foundation",
    description,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2A44",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <StructuredData data={website} />
        <StructuredData
          data={{ "@context": "https://schema.org", ...organization }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
