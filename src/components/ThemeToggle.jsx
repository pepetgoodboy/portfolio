import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="bg-neutral-200 dark:bg-gray-800 rounded-full p-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <FaSun className="w-4 h-4 md:w-5 md:h-5 text-[#FCD462]" />
      ) : (
        <BsFillMoonStarsFill className="w-4 h-4 md:w-5 md:h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
