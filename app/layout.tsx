import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
const inter = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});
const siteUrl = "https://www.zorasafefoundation.org/";
const description =
  "Safety through knowledge. Research that leads to real-world prevention.";
const socialImage = {
  url: `${siteUrl}brand/zorasafe-foundation-social1.png`,
  width: 1200,
  height: 630,
  alt: "ZoraSafe Foundation — Safety through knowledge.",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZoraSafe Foundation",
    template: "%s | ZoraSafe Foundation",
  },
  description,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
