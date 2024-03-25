"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaClipboardList,
  FaCrosshairs,
  FaHouse,
  FaInbox,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import NavbarItem from "./NavbarItem";

import LinkScopeIcon from "../../../public/logo/logo-icon-black.svg";

function Navbar() {
  const NavBarItems = [
    {
      name: "Home",
      route: "/",
      icon: <FaHouse />,
    },
    {
      name: "Scan",
      route: "/scan",
      icon: <FaCrosshairs />,
    },
    {
      name: "Search",
      route: "/search",
      icon: <FaMagnifyingGlass />,
    },
    {
      name: "Docs",
      route: "/docs",
      icon: <FaClipboardList />,
    },
    {
      name: "About",
      route: "/about",
      icon: <FaInbox />,
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      // Expand the navbar if window width is greater than a certain threshold
      if (window.innerWidth > 768) {
        setIsNarrow(false);
        setIsCollapsed(false);
      } else {
        setIsNarrow(true);
        setIsCollapsed(true);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div
        className="sticky top-0 
                  md:hidden flex justify-between items-center 
                  p-4 h-14 z-10
                  bg-white border-b"
      >
        <div className="flex items-center gap-2">
          <Image src={LinkScopeIcon} alt="logo" className="h-6 w-auto" />
          <p className="font-extrabold text-xl">LINKSCOPE</p>
        </div>

        <button onClick={toggleCollapse}>
          <Image src={"/icons/menu.svg"} alt="logo" width={30} height={30} />
        </button>
      </div>

      <div
        onClick={toggleCollapse}
        className={`fixed inset-0 z-10
                  bg-black
                  ${
                    !isNarrow || isCollapsed
                      ? "opacity-0 pointer-events-none"
                      : "opacity-10"
                  }
                  transform duration-500 ease-in-out
                  transition-all`}
      />

      <div
        ref={navbarRef}
        className={`fixed z-10 h-full w-64 overflow-auto
                  bg-white border-r
                  ${
                    isCollapsed
                      ? "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }
                  transform duration-500 ease-in-out
                  transition-all`}
      >
        <div className="flex flex-col h-full items-center gap-8 p-8">
          <div className="flex justify-center items-center gap-2">
            <Image src={LinkScopeIcon} alt="logo" className="h-12 w-auto" />
            <div>
              <p className="font-extrabold text-3xl h-7">LINK</p>
              <p className="font-extrabold text-xl">SCOPE</p>
            </div>
          </div>

          <div className="flex flex-col w-full">
            {NavBarItems.map((item, index) => (
              <NavbarItem
                key={index}
                name={item.name}
                route={item.route}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
