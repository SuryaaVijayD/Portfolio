import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Great_Vibes } from "next/font/google";

// 1. Configure your primary font (Nunito)
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

// 2. Configure your secondary font (Playfair Display)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. Inject BOTH font variables into the body */}
      <body className={`${nunito.variable} ${playfair.variable} font-sans text-white antialiased bg-black`}>
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}