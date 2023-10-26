import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ScrollToTop from "./assets/ScrollToTop";
import Contact from "./components/Contact";

function App() {
  const [themeColor, setThemeColor] = useState("light-theme");
  const [textColor, setTextColor] = useState("text-black");
  const [show, setShow] = useState(false);
  const [harry, setHarry] = useState("Nox");
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const changeTheme = (theme) => {
    setThemeColor(theme);

    if (theme == "light-theme") {
      setHarry("Nox");
      setTextColor("text-black");
    } else {
      setHarry("Lumos");
      setTextColor("text-white");
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <main className={`${themeColor} duration-300`}>
      <ScrollToTop />
      <Navbar
        scrollToSection={scrollToSection}
        about={about}
        home={home}
        projects={projects}
        skills={skills}
        changeTheme={changeTheme}
        harry={harry}
        textColor={textColor}
      />

      <Home home={home} scrollToSection={scrollToSection} contact={contact} />
      <Project projects={projects} textColor={textColor} show={show} />

      <Skill skills={skills} textColor={textColor} />
      <About about={about} textColor={textColor} />
      <Contact contact={contact} textColor={textColor} />
      <Footer textColor={textColor} />
    </main>
  );
}

export default App;
