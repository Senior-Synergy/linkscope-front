import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import {unstable_setRequestLocale} from 'next-intl/server';

import Navbar from "@/components/common/Navbar";

const krub = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Senior Synergy",
  description: "AI Powered Phishing Link Detector",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${krub.className} font-light`}>
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

const locales = ["en", "th"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
