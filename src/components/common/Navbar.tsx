"use client";

import Image from "next/image";
import { useState } from "react";
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div
        className="sticky top-0 
                  md:hidden flex justify-between items-center 
                  p-4 h-14
                  bg-white border-b
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
          className={`fixed flex flex-col items-center gap-4
                      w-64 min-h-full p-4 overflow-auto
                      bg-white border-r
                      ${isSidebarOpen ? "inset-0" : "hidden md:flex"}`}
        >
          <div className="flex justify-center items-center gap-2 py-4">
            <Image src={LinkScopeIcon} alt="logo" className="h-12 w-auto" />
            <p className="font-extrabold text-lg">
              SENIOR <br /> SYNERGY
            </p>
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
      </nav>
    </>
  );
}

export default Navbar;
