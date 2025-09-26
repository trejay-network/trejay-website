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

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
