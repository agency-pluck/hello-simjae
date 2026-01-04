import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaehyeong Sim | Fullstack Developer",
  description: "Next.js, React, TypeScript, NestJS - Fullstack Developer Portfolio",
  keywords: ["Frontend Developer", "Fullstack Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Jaehyeong Sim" }],
  openGraph: {
    title: "Jaehyeong Sim | Fullstack Developer",
    description: "Next.js, React, TypeScript, NestJS - Fullstack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
