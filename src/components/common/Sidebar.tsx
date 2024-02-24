"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../../public/logo/logo-with-icon-black.svg";

interface SidebarProps {
  navItems: {
    name: string;
    route: string;
  }[];
}

function Sidebar({ navItems }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-0 right-0 h-14 w-14 z-20"
      >
        <Image src={"/icons/menu.svg"} alt="logo" width={30} height={30} />
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-300 bg-opacity-30 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />
            <motion.aside
              className="fixed inset-0 h-full w-60 bg-white shadow-xl z-20"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 50, stiffness: 500 }}
            >
              <div className="flex items-center justify-center space-x-4 h-14 w-full">
                <Image src={logo} alt="logo" width={128} height={32} />
              </div>

              <div className="flex flex-col w-full divide-y divide-background border-y border-background">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.route} onClick={toggleSidebar}>
                    <div
                      className="flex items-center justify-center
                                w-full h-14
                                font-semibold text-sm
                               hover:bg-primary hover:text-white
                                transition-all"
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
