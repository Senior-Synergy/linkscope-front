"use client";

import Image from "next/image";
import Link from "next/link";

import LinkScopeIcon from "../../../public/logo/logo-icon-black.svg";

import HomeIcon from "../../../public/icons/house-chimney-blank.svg";
import AboutIcon from "../../../public/icons/circle-information.svg";
import ScanIcon from "../../../public/icons/shield-check.svg";
import SearchIcon from "../../../public/icons/search.svg";
import ContactIcon from "../../../public/icons/square-list.svg";

import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const pathname = extractFirstDirectory(usePathname());

  const MainNavItems = [
    {
      name: "Home",
      route: "/",
      icon: HomeIcon,
    },
    {
      name: "Scan",
      route: "/scan",
      icon: ScanIcon,
    },
    {
      name: "Search",
      route: "/search",
      icon: SearchIcon,
    },
    {
      name: "Docs",
      route: "/docs",
      icon: AboutIcon,
    },
    {
      name: "About",
      route: "/about",
      icon: ContactIcon,
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function extractFirstDirectory(route: string): string {
    const parts = route.replace(/^\/|\/$/g, "").split("/");
    return "/" + parts[0];
  }

  return (
    <>
      <div
        className="sticky top-0 
                  md:hidden flex justify-between items-center 
                  p-4 h-14
                  bg-white border-b shadow-lg
                  "
      >
        <div className="flex items-center gap-2">
          <Image src={LinkScopeIcon} alt="logo" className="h-6 w-auto" />
          <p className="font-extrabold text-xl">SENIOR SYNERGY</p>
        </div>

        <button onClick={toggleSidebar}>
          <Image src={"/icons/menu.svg"} alt="logo" width={30} height={30} />
        </button>
      </div>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed md:hidden inset-0 bg-gray-300 bg-opacity-30"
        />
      )}

      <nav>
        <div
          className={`fixed md:flex flex-col items-center gap-4
                      w-64 min-h-full p-4 overflow-auto
                      bg-white border-r
                      shadow-lg
                      ${isSidebarOpen ? "inset-0" : "hidden"}`}
        >
          <div className="flex justify-center items-center gap-2 py-4">
            <Image src={LinkScopeIcon} alt="logo" className="h-12 w-auto" />
            <p className="font-extrabold text-lg">
              SENIOR <br /> SYNERGY
            </p>
          </div>

          <div className="flex flex-col w-full">
            {MainNavItems.map((item, index) => (
              <Link key={index} href={item.route}>
                <div
                  className={`
                  w-full px-6 py-4 rounded-xl transition-all duration-300
                  ${pathname === item.route && "bg-primary-500"}`}
                >
                  <div className="flex items-center gap-4 hover:opacity-100">
                    <Image className="h-6 w-auto" src={item.icon} alt="icon" />
                    <p className="font-bold text-lg">{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
