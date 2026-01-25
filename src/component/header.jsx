import { useTheme } from "../hook/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";

import { Link } from "react-router-dom";
function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav className="flex flex-wrap items-center justify-between mx-auto p-4 bg-violet  dark:text-white border-gray-200 dark:bg-gray-900">
      <Link
        to="/"
        className="flex item-center space-x-3 rtl:space-x-reverse"
      ></Link>
      <div className="block">
        <ul className="flex items-center space-x-1 ">
          <li>
            <a
              href="#about"
              className="rounded-md hover:bg-slate-50 dark:hover:bg-gray-700 px-3 py-2 text-base"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="rounded-md hover:bg-slate-50 dark:hover:bg-gray-700 px-3 py-2 text-base"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#Certifications"
              className="rounded-md hover:bg-slate-50 dark:hover:bg-gray-700 px-3 py-2 text-base"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="rounded-md hover:bg-slate-50 dark:hover:bg-gray-700 px-3 py-2 text-base"
            >
              Projects
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={`
          relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out
          
          focus:outline-none focus:ring-2 focus:ring-opacity-50
        `}
            >
              {/* Slider */}
              <div
                className={`
            absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ease-in-out
            flex items-center justify-center
            ${
              isDark
                ? "translate-x-8 bg-gray-900 text-yellow-400"
                : "translate-x-0.5 bg-white text-yellow-500"
            }
          `}
              >
                {isDark ? <Moon size={14} /> : <Sun size={14} />}
              </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
