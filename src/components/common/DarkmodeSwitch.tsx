"use client";

import { useTheme } from "next-themes";
import { FaLightbulb, FaMoon, FaSun } from "react-icons/fa6";

import Switch from "./Switch";
import { useEffect, useState } from "react";

function DarkmodeSwitch() {
  const { theme, setTheme } = useTheme();

  // if (!theme) {
  //   return null; // or you can render a loading spinner or placeholder
  // }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        <FaMoon className="fill-black hover:fill-gray-700 dark:fill-white hover:dark:fill-gray-300" />
      </button>
    </div>
  );
}

export default DarkmodeSwitch;
