"use client";
import { Moon, Sun, User, Heart, Sparkles } from "lucide-react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className="
        sticky top-0 z-30 w-full
        px-6 py-4 flex items-center justify-between
        bg-white/40 dark:bg-black/40 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800
        transition-colors
      "
      style={{ WebkitBackdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-black dark:text-white" strokeWidth={2} />
        </div>
        <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          MediaMorph
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => {
          window.location.href = "https://github.com/AnshBalar429";
        }}
          className="
            flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
            transition-colors text-sm font-medium
          "
        >
          <User className="w-4 h-4 mr-2" />
          Github
        </button>
        
        <button
          className="
            relative inline-flex items-center justify-center rounded-md p-2
            text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
            transition-colors
          "
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      </div>
    </header>
  );
};

export default Header;
