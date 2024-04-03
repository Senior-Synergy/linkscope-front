"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaCrosshairs,
  FaHouse,
  FaInbox,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import NavbarItem from "./NavbarItem";
import LinkScopeIcon from "../../../public/logo/logo-icon-black.svg";
import NavbarNeoItem from "./NavbarNeoItem";

function NavbarNeo() {
  const NavBarItems = [
    {
      name: "Home",
      route: "/",
      icon: <FaHouse />,
    },
    // {
    //   name: "Scan",
    //   route: "/scan",
    //   icon: <FaCrosshairs />,
    // },
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

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth > 768) {
      //   setIsCollapsed(true);
      // } else {
      //   setIsCollapsed(false);
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div
        className="sticky top-0 
                  flex justify-center items-center
                  h-14 z-10
                  border-b
                  bg-gray-50 bg-opacity-90 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-2">
            <Image src={LinkScopeIcon} alt="logo" className="h-6 w-auto" />
            <p className="font-extrabold text-xl">LINKSCOPE</p>
          </div>

          <div className="hidden md:flex">
            {NavBarItems.map((item, index) => (
              <NavbarNeoItem
                key={index}
                name={item.name}
                icon={item.icon}
                route={item.route}
              />
            ))}
          </div>

          <button onClick={toggleCollapse} className="md:hidden">
            <Image src={"/icons/menu.svg"} alt="logo" width={30} height={30} />
          </button>
        </div>
      </div>

      <div
        onClick={toggleCollapse}
        className={`fixed inset-0 z-10
                bg-gray-300
                  ${
                    isCollapsed
                      ? "bg-opacity-0 pointer-events-none"
                      : "bg-opacity-50 backdrop-blur-sm"
                  }
                  transform duration-500 ease-in-out
                  transition-all`}
      />

      <div
        className={`fixed z-10 h-full w-64 overflow-auto
                  bg-white shadow-light
                  ${
                    isCollapsed
                      ? "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }
                  
                  transform duration-500 ease-in-out
                  transition-all`}
      >
        <div className="flex flex-col h-full items-center gap-8 px-4 py-8">
          <div className="flex justify-center items-center gap-2">
            <Image src={LinkScopeIcon} alt="logo" className="h-12 w-auto" />
            <div>
              <p className="font-extrabold text-3xl h-8">LINK</p>
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

export default NavbarNeo;
