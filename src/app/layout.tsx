import type { Metadata } from "next";
import { Montserrat, Prompt as Krub } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const krub = Krub({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "next-themes";

import backgroundImage from "../../public/images/background/double-bubble-outline.png";
import SideNavFixed from "@/components/common/navigation/SideNavFixed";

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
      <body className={`${krub.className} font-light`}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main */}
          {children}

          {/* Modal Portal */}
          <div id="portal-root" />
        </div>
      </body>
    </html>
  );
}
