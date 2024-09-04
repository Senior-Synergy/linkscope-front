"use client";

import { useTheme } from "next-themes";
import { FaLightbulb } from "react-icons/fa6";

function DarkmodeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center px-4 py-2 w-full h-12 space-x-2 rounded-lg border bg-white dark:bg-black hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <FaLightbulb className="fill-black hover:fill-gray-700 dark:fill-white hover:dark:fill-gray-300" />
    </button>
  );
}

export default DarkmodeSwitch;
