import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseMetadata: Metadata = {
  title: "TreJay — The Blockchain Network | 3JAY",
  description: "Fast, scarce, and sustainable — ~2-second blocks, <60s finality, and fee burns that tie network usage to value. 3JAY is capped at 42,000,000 (1 3JAY = 100,000,000 jots).",
  metadataBase: new URL("https://trejay.com"),
  openGraph: {
    title: "TreJay — The Blockchain Network | 3JAY",
    description: "Fast, scarce, and sustainable — ~2-second blocks, <60s finality, and fee burns that tie network usage to value. 3JAY is capped at 42,000,000 (1 3JAY = 100,000,000 jots).",
    url: "https://trejay.com",
    siteName: "TreJay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TreJay - The Blockchain Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TreJay — The Blockchain Network | 3JAY",
    description: "Fast, scarce, and sustainable — ~2-second blocks, <60s finality, and fee burns that tie network usage to value. 3JAY is capped at 42,000,000 (1 3JAY = 100,000,000 jots).",
    images: ["/og-image.png"],
    creator: "@trejaynetwork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const placeholder = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER === '1';

  if (placeholder) {
    return {
      ...baseMetadata,
      // tell crawlers not to index while placeholder is active
      robots: { index: false, follow: false, nocache: true },
      openGraph: { ...baseMetadata.openGraph, title: 'TreJay Network' },
      twitter: { ...baseMetadata.twitter, title: 'TreJay Network' },
    };
  }

  return baseMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const placeholder = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER === '1';
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {!placeholder && <Header />}
        <main className="min-h-screen">
          {children}
        </main>
        {!placeholder && <Footer />}
      </body>
    </html>
  );
}
