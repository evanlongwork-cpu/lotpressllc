import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { SITE_TITLE, STANDFIRST } from "./copy";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lotpressllc.com"),
  title: SITE_TITLE,
  description: STANDFIRST,
  applicationName: "Lotpress",
  openGraph: {
    title: SITE_TITLE,
    description: STANDFIRST,
    url: "https://lotpressllc.com",
    siteName: "Lotpress",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: STANDFIRST,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plex.variable} ${serif.variable}`}>
      <body className={plex.className}>{children}</body>
    </html>
  );
}
