import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { baseSEO, localBusinessStructuredData, organizationStructuredData } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { PerformanceMonitor } from "@/components/performance/PerformanceMonitor";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={localBusinessStructuredData} />
        <StructuredData data={organizationStructuredData} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
