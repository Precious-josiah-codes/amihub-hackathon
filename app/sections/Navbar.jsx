"use client";

import Image from "next/image";
import { content } from "../data/content";

import { useContext } from "react";
import { StoreContext } from "../context/Store";
import Link from "next/link";

const Navbar = () => {
  const { toggleSideMenu } = useContext(StoreContext);
  const { navBar } = content;

  // styles
  const hover = `cursor-pointer hover:text-slate-300 transition-all duration-300 ease-in-out`;
  return (
    <nav
      className={`fixed z-50 right-0 w-full h-[5rem] px-6 sm:px-[4rem] flex items-center backdrop-blur-lg justify-between text-white border-b borderStyle text-sm`}
    >
      {/* logo */}
      <div className="sm:h-[22rem] sm:w-[14rem] h-[19rem] w-[4rem] relative">
        <Image
          class="object-contain w-full h-full"
          src={navBar.newlogo}
          fill
          alt=""
          priority
        />
      </div>

      {/* links */}
      <ul className="capitalize space-x-14 secondary-color font-medium hidden sm:flex">
        {navBar.links.map((links, index) =>
          index !== 2 ? (
            <Link key={index} href={links.link}>
              <li className={hover}>{links.title}</li>
            </Link>
          ) : (
            <>
              <li
                className={hover}
                onClick={() => {
                  const footer = document.querySelector("#footer");
                  footer.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {links.title}
              </li>
            </>
          )
        )}
      </ul>

      {/* Pre Order btn */}
      <button className="hidden  px-4 py-2 bg-blue-500 rounded-[5px]">
        Pre Order
      </button>

      {/* hamburger menu */}
      <div
        className="flex sm:hidden w-fit p-1 rounded-md"
        onClick={toggleSideMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
