import Navbar from "@/@components/common/Navbar";
import PromoBanner from "@/@components/common/PromoBanner";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistFigtree = Geist_Mono({
  variable: "--font-geist-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homepage - Fametonic",
  description: "Homepage - Fametonic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistFigtree.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PromoBanner />
        <Navbar />
        <main id="main-content overflow-x-hidden" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
      </body>
    </html>
  );
}
