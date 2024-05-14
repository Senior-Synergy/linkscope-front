"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronRight, FaEllipsisVertical } from "react-icons/fa6";
import { usePathname } from "next/navigation";

// import SideNavContent from "./SideNavContent";
import LinkScopeIcon from "../../../../public/logo/logo-icon-primary.svg";
import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher";
import DarkmodeSwitch from "../DarkmodeSwitch";

interface Props {
  navItems: {
    name: string;
    route: string;
  }[];
}

function SideNavOverlay({ navItems }: Props) {
  // const currentPath = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsCollapsed(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // useEffect(() => {
  //   setIsCollapsed(true);
  // }, [currentPath]);

  return (
    <>
      <div>
        <button
          className={`md:hidden fixed top-0 right-0 z-10 p-4 w-16 h-16`}
          onClick={toggleCollapse}
        >
          <FaEllipsisVertical className="w-6 h-6" />
        </button>
      </div>

      <div
        onClick={toggleCollapse}
        className={`fixed inset-0 z-10 lg:hidden
                  bg-gray-200 dark:bg-gray-800
                  ${
                    isCollapsed
                      ? "bg-opacity-0 dark:bg-opacity-0 pointer-events-none"
                      : "bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm"
                  }
                  lg:opacity-0 lg:pointer-events-none
                  transform duration-500 ease-in-out
                  transition-all`}
      />

      <div
        className={`fixed z-10 h-full w-64 overflow-auto
                  bg-white dark:bg-black
                  ${
                    isCollapsed
                      ? "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }
                  lg:hidden
                  transform duration-500 ease-in-out
                  transition-all`}
      >
        <div className="flex justify-center items-center gap-2 p-8 pb-4">
          <Image src={LinkScopeIcon} alt="logo" className="h-7 mb-1 w-auto" />
          <div>
            <p className="font-extrabold text-2xl h-8">LINKSCOPE</p>
          </div>
        </div>

        {/* <SideNavContent /> */}

        <div className="p-4">
          {/* <p className="mb-4 font-medium">Navigation</p> */}

          <div className="flex flex-col space-y-2 w-full">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                onClick={() => setIsCollapsed(true)}
              >
                <div
                  className={`flex items-center justify-between px-4 py-2 h-14 w-full space-x-2 rounded-lg border hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors`}
                >
                  {/* <item.icon /> */}

                  <p>{item.name}</p>

                  <FaChevronRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-4">
          {/* <p className="mb-4 font-medium">Options</p> */}

          <div className="flex space-x-2">
            <div className="w-1/2">
              <LocaleSwitcher />
            </div>
            <div className="w-1/2">
              <DarkmodeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavOverlay;
