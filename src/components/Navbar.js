import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { BsSun, BsMoonFill } from "react-icons/bs";

function Navbar({
  scrollToSection,
  home,
  about,
  projects,
  skills,
  changeTheme,
  harry,
  textColor,
}) {
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
    <div className={`${show ? "active" : "hidden-nav"} sm:h-16 z-50`}>
      <nav className="p-4 text-black  hidden sm:flex justify-between ">
        <ul className={`flex flex-col gap-4 text-xl	navbar-social ${textColor}`}>
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
        <div>
          <ul
            className={`list-none flex  place-content-center gap-8  text-xl navbar ${textColor} bg-secondary-color rounded-full py-3 px-6 `}
          >
            <li onClick={() => scrollToSection(home)}>Home</li>
            <li onClick={() => scrollToSection(projects)}>Projects</li>
            <li onClick={() => scrollToSection(skills)}>Skills</li>
            <li onClick={() => scrollToSection(about)}>About</li>
          </ul>
        </div>

        <div id="lumos" className={`w-10 ${textColor}`}>
          <div className="flex items-center gap-y-1 flex-col">
            <div>{harry}</div>
            <div>
              {harry == "Nox" ? (
                <BsMoonFill
                  onClick={() => changeTheme("dark-theme")}
                  className="cursor-pointer hover:text-[#DED7B1] duration-300"
                />
              ) : (
                <BsSun
                  onClick={() => changeTheme("light-theme")}
                  className="cursor-pointer hover:text-[#DED7B1] duration-300"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="p-4 text-black  flex sm:hidden justify-between ">
        <ul className={`flex flex-col gap-4 text-xl	navbar-social ${textColor}`}>
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

        <div id="lumos" className={`w-10 ${textColor}`}>
          <div className="flex items-center gap-y-1 flex-col">
            <div>{harry}</div>
            <div>
              {harry == "Nox" ? (
                <BsMoonFill
                  onClick={() => changeTheme("dark-theme")}
                  className="cursor-pointer hover:text-[#DED7B1] duration-300"
                />
              ) : (
                <BsSun
                  onClick={() => changeTheme("light-theme")}
                  className="cursor-pointer hover:text-[#DED7B1] duration-300"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
