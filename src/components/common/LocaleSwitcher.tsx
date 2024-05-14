"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

import { useLocale } from "next-intl";
import { locales } from "@/config";
import { useState } from "react";
import CountryFlag from "./CountryFlag";

// import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const elementRef = useRef<HTMLDivElement>(null);

  const [isSelecting, setIsSelecting] = useState(false);

  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelect(locale: string) {
    setIsSelecting(false);

    const nextLocale = locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
    startTransition(() => router.refresh());
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        setIsSelecting(false);
      }
    };

    const handleScroll = (event: Event) => {
      setIsSelecting(false);
    };

    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.addEventListener("scroll", handleScroll, true);
    };
  });

  return (
    // <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
    //   {locales.map((locale) => (
    //     <option key={locale} value={locale}>
    //       {t("locale", { locale: locale })}
    //     </option>
    //   ))}
    // </LocaleSwitcherSelect>
    <div ref={elementRef} className="relative">
      <button
        disabled={isPending}
        onClick={() => setIsSelecting(!isSelecting)}
        className={`flex items-center justify-center px-4 py-2 w-full h-12 rounded-lg border hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors ${
          isSelecting && "bg-gray-100 dark:bg-gray-900"
        }`}
      >
        <CountryFlag country={locale == "th" ? "th" : "gb"} />
        <p className="ml-2">{locale.toUpperCase()}</p>
      </button>

      <div
        className={`absolute top-[105%] left-0 flex flex-col w-full rounded-lg border overflow-hidden ${
          isSelecting ? "opacity-100" : "opacity-0"
        }`}
      >
        {locales.map((locale) => (
          <button
            key={locale}
            value={locale}
            disabled={isPending}
            onClick={() => onSelect(locale)}
            className="flex items-center justify-center px-4 py-2 h-12 bg-white dark:bg-black hover:bg-gray-100 hover:dark:bg-gray-900 transition-colors"
          >
            <CountryFlag country={locale == "th" ? "th" : "gb"} />
            <p className="ml-2">{locale.toUpperCase()}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
