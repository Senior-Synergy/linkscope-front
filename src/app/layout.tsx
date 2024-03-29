import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Senior Synergy",
  description: "AI Powered Phishing Link Detector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main */}
          <div className="flex flex-col flex-auto md:ml-64">{children}</div>

          {/* Modal Portal */}
          <div id="portal-root" />
        </div>
      </body>
    </html>
  );
}
