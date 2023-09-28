import React from "react";

function Navbar() {
  return (
    <nav className="p-4  bg-transparent">
      <ul className="list-none flex place-content-center gap-8 text-white z-10	text-xl	relative ">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
