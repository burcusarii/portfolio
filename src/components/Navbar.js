import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

function Navbar({ scrollToSection, home, about, projects, skills }) {
  return (
    <nav className="p-4  bg-slate-950/10 text-white 	fixed right-0 top-0 left-0 z-10 flex justify-between items-center	">
      <ul className="list-none flex place-content-center gap-8  text-2xl navbar ml-96 pl-5">
        <li onClick={() => scrollToSection(home)}>Home</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(skills)}>Skills</li>
        <li onClick={() => scrollToSection(about)}>About</li>
      </ul>
      <ul className="flex gap-4 text-xl	navbar-social">
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
    </nav>
  );
}

export default Navbar;
