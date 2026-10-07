import type { Metadata } from "next";
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
export const metadata: Metadata = {
  title: {
    default: "ZoraSafe Foundation | Safety through knowledge.",
    template: "%s | ZoraSafe Foundation",
  },
  description:
    "Closing the digital safety knowledge gap through community education, practical training, research, and technology access.",
  openGraph: {
    title: "ZoraSafe Foundation",
    description:
      "Safety through knowledge. Research that leads to real-world prevention.",
    type: "website",
    locale: "en_US",
  },
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
