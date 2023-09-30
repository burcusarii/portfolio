import React from "react";

import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <nav className="p-4  bg-green-500	fixed right-0 top-0 left-0 z-10">
      <ul className="list-none flex place-content-center gap-8  text-xl">
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#about">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link smooth to="#projects">
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link smooth to="#skills">
            Skills
          </Link>
        </li>
        <Link smooth to="#contact">
          Contact
        </Link>{" "}
      </ul>
    </nav>
  );
}

export default Navbar;
