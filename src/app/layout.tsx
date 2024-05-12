import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const krub = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  preload: false,
});

import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Senior Synergy",
  description: "AI Powered Phishing Link Detector",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${krub.className} font-light`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen m-auto">
            {/* Navbar */}
            <Navbar />

            {/* Main */}
            {children}

            {/* Modal Portal */}
            <div id="portal-root" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
