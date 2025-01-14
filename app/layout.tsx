import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "iPhone iPad & Mac Repair Leeds - Cracked Glass Screen Replacement | iPadService Leeds",
    description: "Premium iPhone and iPad Screen Replacement Store Based in Horsforth Leeds, all Mobile Phones Fixed. Most Repairs  While You Wait, No Appointment Needed. We also repair Samsung Galaxy S6/S7 and LG Nexus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png"/>
        {/*<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>*/}
    </Head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Header/>
    <div className="pt-[72px]">
        {children}
    </div>
    <Footer/>
    </body>
    </html>
  );
}
