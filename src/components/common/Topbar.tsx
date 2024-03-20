"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import Sidebar from "./Sidebar";

import LinkScopeIcon from "../../../public/logo/logo-icon-black.svg";

function Topbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-0 right-0 h-14 w-14 z-20"
      >
        <Image src={"/icons/menu.svg"} alt="logo" width={30} height={30} />
      </button>

      <div
        className="sticky top-0 flex justify-between items-center 
                  p-4 h-14
                  bg-white border-b
                  "
      >
        <div className="flex items-center gap-2">
          <Image src={LinkScopeIcon} alt="logo" className="h-6 w-auto" />
          <p className="font-extrabold text-xl hidden lg:block">
            SENIOR SYNERGY
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-300 bg-opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Topbar;
