"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { IconContext } from "react-icons";

interface SidebarItemProps {
  name: string;
  route: string;
  icon: ReactNode;
}

function SidebarItem({ name, route, icon }: SidebarItemProps) {
  const currentPath = extractFirstDirectory(usePathname());
  const isCurrentPath = currentPath === route;

  function extractFirstDirectory(route: string): string {
    const parts = route.replace(/^\/|\/$/g, "").split("/");
    return "/" + parts[0];
  }

  return (
    <Link href={route}>
      <div
        className={`group/button
                  w-full px-6 py-4 rounded-xl transition-all duration-300
                  ${isCurrentPath && "bg-primary-500"}`}
      >
        <div className="flex items-center gap-4 hover:opacity-100">
          <IconContext.Provider
            value={{
              className: `${
                currentPath === route ? "fill-white" : "fill-black"
              } h-10 w-auto`,
            }}
          >
            {icon}
          </IconContext.Provider>

          <p
            className={`font-bold text-lg ${
              isCurrentPath ? "text-white" : "text-black"
            }`}
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarItem;
