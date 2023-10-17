import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

function Navbar({ scrollToSection, home, about, projects, skills }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`${show ? "active" : "hidden"}`}>
      <nav className="p-4 text-black  flex justify-center items-center">
        <ul className="flex flex-col gap-4 text-xl	navbar-social fixed top-2 left-2">
          <li>
            <a
              href="https://www.linkedin.com/in/burcu-irem-s-ba0526280/
            "
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/burcusarii" target="_blank">
              {" "}
              <FaGithub />
            </a>{" "}
          </li>
          <li>
            <a href="" target="_blank">
              {" "}
              <FaTwitter />
            </a>
          </li>
        </ul>
        <ul className="list-none flex place-content-center gap-8  text-xl navbar">
          <li onClick={() => scrollToSection(home)}>Home</li>
          <li onClick={() => scrollToSection(projects)}>Projects</li>
          <li onClick={() => scrollToSection(skills)}>Skills</li>
          <li onClick={() => scrollToSection(about)}>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
