import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

import backgroundImage from "../../public/images/background/double-bubble-outline.png";

import Navbar from "@/components/common/Navbar";
import Image from "next/image";

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
          {/* Background Image */}
          <div className="fixed -z-10 inset-0">
            <Image
              alt="patterns"
              src={backgroundImage}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>

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
