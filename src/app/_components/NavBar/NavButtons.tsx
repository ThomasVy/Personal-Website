"use client";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

type Path = {
  title: string;
  link: string;
};

const paths: Path[] = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "About", link: "/about" },
  { title: "Contact Info", link: "/contact" },
  { title: "Resume", link: "/resume" },
];

function NavButtons() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none  focus:ring-2 focus:ring-gray-600 md:hidden"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
        data-tooltip-id="openMenu"
        data-tooltip-content="Open main menu"
        onClick={() => setOpenNav(true)}
      >
        <Tooltip id="openMenu" />
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
          {paths.map((path) => {
            return (
              <li key={path.title}>
                <a
                  href={path.link}
                  className="m-2 block rounded bg-blue-600 px-3 py-2 hover:bg-gray-700 md:bg-transparent md:p-0 md:hover:text-blue-500"
                >
                  {path.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default NavButtons;
