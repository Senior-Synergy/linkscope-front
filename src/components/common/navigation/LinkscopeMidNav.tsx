"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCaretUp } from "react-icons/fa6";

import { LinkNavItems } from "@/constants/navItems";
import { extractDirectory } from "@/utils/directory";

function LinkscopeMidNav() {
  const currentPath = usePathname();
  const isLinkscope = extractDirectory(currentPath, 0) == "/linkscope";
  const linkMenuRef = useRef<HTMLDivElement>(null);

  const [isLinkCollapsed, setIsLinkCollapsed] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        linkMenuRef.current &&
        !linkMenuRef.current.contains(event.target as Node)
      ) {
        setIsLinkCollapsed(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {isLinkscope && (
        <div
          ref={linkMenuRef}
          className={`lg:hidden border-b overflow-hidden 
                    bg-gray-50 bg-opacity-75 backdrop-blur-sm 
                    transition-all duration-300 ease-in-out
                    ${isLinkCollapsed ? "h-14" : "h-[14.75rem]"}
      `}
        >
          <div
            className={`flex items-center justify-between px-4 h-14 
                      transition-all duration-300 ease-in-out 
                      ${isLinkCollapsed ? "" : "border-b"}`}
          >
            <p className="font-bold">LINKSCOPE MENU</p>
            <button onClick={() => setIsLinkCollapsed(!isLinkCollapsed)}>
              <div className="flex items-center gap-2">
                <FaCaretUp
                  className={`fill-black w-6 h-6 transition-all ${
                    isLinkCollapsed ? "" : "rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`space-y p-4 transition-all duration-300 ease-in-out ${
              isLinkCollapsed ? "" : ""
            }`}
          >
            {LinkNavItems.map((item, index) => (
              <Link
                href={item.route}
                key={index}
                className={`flex items-center gap-2 h-12 rounded-lg px-2 transition-colors ${
                  currentPath == item.route
                    ? "bg-primary-500 text-white"
                    : "hover:text-gray-700"
                }`}
              >
                <item.icon />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default LinkscopeMidNav;
