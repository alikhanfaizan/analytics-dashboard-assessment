import React, { useEffect, useRef } from "react";
import { MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar({
  setDarkMode,
  darkMode,
  items,
  setSelected,
  sidebarOpen,
  setSidebarOpen,
}) {
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  const handleSideBar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        navbarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !navbarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setSidebarOpen]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <div
        ref={navbarRef}
        className={`h-16 flex w-full items-center justify-between px-5 ${
          darkMode
            ? " bg-[#4682B4] text-white shadow-md shadow-slate-600"
            : "bg-slate-300 shadow-md shadow-slate-400"
        } shadow-2xs drop-shadow-md relative z-50`}
      >
        <button onClick={handleSideBar} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="w-6" />
        <h1 className="text-center text-lg font-extrabold tracking-widest absolute left-1/2 transform -translate-x-1/2">
          DASHBOARD
        </h1>

        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="w-6 h-6"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-white" />
          ) : (
            <MoonIcon className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFDEAD] dark:bg-[#6082B6] shadow-2xl transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b dark:border-gray-700 border-gray-200">
          <h2 className="text-lg font-semibold dark:text-white">Analysis</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="w-6 h-6 dark:text-white" />
          </button>
        </div>
        <ul className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-3rem)] dark:text-white">
          {items.map((item) => (
            <button
              onClick={() => {
                setSelected(item.id);
              }}
              key={item.id}
              className="w-full hover:bg-[#DAA06D] dark:hover:bg-gray-800 p-3.5 rounded-2xl cursor-pointer block"
            >
              {item.name}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
