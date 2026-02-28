import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sabon = localFont({
  src: [
    { path: "../fonts/Sabon.ttf", weight: "400", style: "normal" },
    { path: "../fonts/SabonItalic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/SabonBold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/SabonBoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-sabon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Outmore Living — Brand Design System",
  description:
    "Outmore Living brand design language. Glassmorphism, ambient depth, editorial typography, and the Warmth Gradient light-to-dark flow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSans.variable} ${sabon.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
