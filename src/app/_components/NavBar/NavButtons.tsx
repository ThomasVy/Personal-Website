"use client";
import {
  faBars,
  faFileDownload,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

type Path = {
  title: React.ReactNode;
  link: string;
};

const paths: Path[] = [
  { title: "Projects", link: "/projects" },
  { title: "Contact Info", link: "/contact" },
  {
    title: (
      <span>
        Resume
        <FontAwesomeIcon icon={faFileDownload} className="ml-2" />
      </span>
    ),
    link: "/resume.pdf",
  },
];

function useNav() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const checkIfNavShouldClose = () => {
      if (openNav && window.innerWidth > 768) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", checkIfNavShouldClose);
    return () => window.removeEventListener("resize", checkIfNavShouldClose);
  }, [openNav]);

  return [openNav, setOpenNav] as const;
}

function NavButtons() {
  const [openNav, setOpenNav] = useNav();

  return (
    <div className="ml-auto">
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
        data-tooltip-id="openMenu"
        data-tooltip-content="Open nav menu"
        onClick={() => setOpenNav(true)}
      >
        <Tooltip id="openMenu" />
        <span className="sr-only">Open nav menu</span>
        <FontAwesomeIcon size="2x" icon={faBars} />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-gray-700 p-4 ring-gray-700 transition-all ${openNav ? "translate-x-0" : "translate-x-full"
          } w-full md:hidden`}
      >
        <div className="ml-auto">
          <button
            data-tooltip-id="closeMenu"
            data-tooltip-content="Close nav menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 "
            onClick={() => setOpenNav(false)}
          >
            <Tooltip id="closeMenu" />
            <span className="sr-only">Open nav menu</span>
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
        </div>
        <ul className="mt-4 flex flex-col rounded-lg p-4 text-3xl font-medium rtl:space-x-reverse">
          {paths.map((path, index) => {
            return (
              <li
                className="hover:translate-x-1 hover:text-blue-600"
                key={index}
              >
                <a href={path.link} className="m-2 block rounded px-3 py-2">
                  {path.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:flex" id="navbar-dropdown">
        <ul className="flex gap-2 space-x-8 border-0 p-2 font-medium">
          {paths.map((path, index) => {
            return (
              <li key={index}>
                <a
                  href={path.link}
                  className="bg-transparent p-0 hover:text-blue-500"
                >
                  {path.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default NavButtons;
