import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

function Navbar({ scrollToSection, home, about, projects, skills }) {
  return (
    <nav className="p-4  text-black 	fixed right-0 top-0 left-0 z-10 flex justify-center items-center">
      <ul className="flex flex-col gap-4 text-xl	navbar-social fixed top-2 left-2">
        <li className="">
          <FaLinkedin />
        </li>
        <li>
          {" "}
          <FaGithub />
        </li>
        <li>
          {" "}
          <FaTwitter />
        </li>
      </ul>
      <ul className="list-none flex place-content-center gap-8  text-xl navbar">
        <li onClick={() => scrollToSection(home)}>Home</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(skills)}>Skills</li>
        <li onClick={() => scrollToSection(about)}>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
