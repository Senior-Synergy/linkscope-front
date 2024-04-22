"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkNavItems, MainNavItems } from "@/constants/navItems";
import { extractDirectory } from "@/utils/directory";

function SideNavContent() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col px-4 divide-y">
      <div className="py-4">
        <div className="flex flex-col gap-1 w-full">
          {MainNavItems.map((item, index) => (
            <Link key={index} href={item.route}>
              <div
                className={`group/button flex items-center w-full h-11 rounded-lg p-4
                    transition-colors          
                    ${
                      extractDirectory(currentPath, 0) == item.route
                        ? "bg-primary text-white"
                        : "hover:bg-gray-200"
                    }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon />

                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-4">
        <p className="ml-4 mb-2 mt-1 font-bold">LINKSCOPE</p>

        <div className="flex flex-col gap-1 w-full">
          {LinkNavItems.map((item, index) => (
            <Link key={index} href={item.route}>
              <div
                className={`group/button flex items-center w-full h-11 rounded-lg p-4
                    transition-colors
                    ${
                      currentPath == item.route
                        ? "bg-primary text-white"
                        : "hover:bg-gray-200"
                    }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon />

                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideNavContent;
