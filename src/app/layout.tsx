import type { Metadata } from "next";
import { Inter, Kanit, Montserrat } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

import Navbar from "@/components/common/Navbar";

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
          <Navbar />
          {children}
        </div>
        <div id="portal-root" />
      </body>
    </html>
  );
}
