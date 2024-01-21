"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar w-screen text-gray-400 bg-black font-bold">
      <div className="navbar-start bg-black">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {menuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-500 text-white">
              <li className="uppercase">
                <Link href="/">
                  <p onClick={closeMenu}>Home</p>
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/skills">
                  <p onClick={closeMenu}>Skills</p>
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/projects">
                  <p onClick={closeMenu}>Projects</p>
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/experiences">
                  <p onClick={closeMenu}>Experiences</p>
                </Link>
              </li>
              <li className="uppercase">
                <Link href="/Sundaram_Resume.pdf">
                  <p onClick={closeMenu}>RESUME</p>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <a
          href="/"
          className="hidden  lg:block btn btn-ghost text-lg text-center py-2"
        >
          <span className="font-extrabold text-xl">{"</>"}</span>sundaram
          KRISHNAN
        </a>
      </div>
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li className="uppercase">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="uppercase">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="uppercase">
            <Link href="/experiences">Experiences</Link>
          </li>
          <li className="uppercase">
            <Link href="/Sundaram_Resume.pdf">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end uppercase mr-4">
        <Link href="/form">Contact Me</Link>
      </div>
    </div>
  );
}
