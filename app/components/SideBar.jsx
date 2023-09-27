"use client";

import { useContext } from "react";
import { StoreContext } from "../context/Store";
import { content } from "../data/content";
import Link from "next/link";

const SideBar = () => {
  const { displaySideMenu, toggleSideMenu } = useContext(StoreContext);

  const { navBar } = content;

  const linkStyle = "mb-6";
  return (
    <div
      className={`
       top-0 right-0 w-[90vw] bg-primaryColor p-10 pl-20 text-white fixed h-full z-[999] ease-in-out duration-300 uppercase border-l border-[#7571852d] ${
         displaySideMenu ? "translate-x-0 " : "translate-x-full sm:hidden"
       }`}
    >
      {/* start close sidemenu */}
      <div className="w-fit" onClick={toggleSideMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {/* end close sidemenu */}
      {/* start links */}
      <h2
        className="mt-20 text-2xl font-semibold text-white"
        onClick={toggleSideMenu}
      >
        {navBar.links.map(({ link, title }, index) =>
          index !== 2 ? (
            <Link key={index} href={link}>
              <div className={`${linkStyle}`}>{title}</div>
            </Link>
          ) : (
            <>
              <div
                onClick={() => {
                  const footer = document.querySelector("#footer");
                  footer.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {title}
              </div>
            </>
          )
        )}
      </h2>
      {/* end links */}

      {/* start authentication btn */}
      <div className="space-y-8 absolute bottom-[3rem] hidden">
        {/* Pre Order btn */}
        <button className="px-4 py-2 bg-blue-500 rounded-[5px]">
          Pre Order
        </button>
      </div>
      {/* end authentication btn */}
    </div>
  );
};

export default SideBar;
