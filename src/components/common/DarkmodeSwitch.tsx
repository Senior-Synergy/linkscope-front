"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import Switch from "./Switch";

function DarkmodeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center gap-2">
      <Switch
        isOn={theme == "dark"}
        onToggle={() =>
          theme == "dark" ? setTheme("light") : setTheme("dark")
        }
      />
      {theme == "dark" ? (
        <FaMoon className="fill-white" />
      ) : (
        <FaSun className="fill-black" />
      )}
    </div>
  );
}

export default DarkmodeSwitch;
