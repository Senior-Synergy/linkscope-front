"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import SideNavContent from "./SideNavContent";
import LinkScopeIcon from "../../../../public/logo/logo-icon-black.svg";

function SideNavOverlay() {
  const currentPath = usePathname();
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

  useEffect(() => {
    setIsCollapsed(true);
  }, [currentPath]);

  return (
    <>
      <div>
        <button
          className={`lg:hidden fixed top-0 right-0 z-10 h-14 w-8`}
          onClick={toggleCollapse}
        >
          <FaEllipsisVertical className="fill-black w-6 h-6" />
        </button>
      </div>

      <div
        onClick={toggleCollapse}
        className={`fixed inset-0 z-10 lg:hidden
                  bg-gray-300
                  ${
                    isCollapsed
                      ? "bg-opacity-0 pointer-events-none"
                      : "bg-opacity-50 backdrop-blur-sm"
                  }
                  lg:opacity-0 lg:pointer-events-none
                  transform duration-500 ease-in-out
                  transition-all`}
      />

      <div
        className={`fixed z-10 h-full w-64 overflow-auto
                  bg-white
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
          <Image src={LinkScopeIcon} alt="logo" className="h-12 w-auto" />
          <div>
            <p className="font-extrabold text-3xl h-8">SENIOR</p>
            <p className="font-bold text-xl">SYNERGY</p>
          </div>
        </div>

        <SideNavContent />
      </div>
    </>
  );
}

export default SideNavOverlay;
