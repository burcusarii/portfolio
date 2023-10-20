import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ScrollToTop from "./assets/ScrollToTop";

function App() {
  const [themeColor, setThemeColor] = useState("light-theme");
  const [harry, setHarry] = useState("Nox");
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const footer = useRef(null);

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
    } else {
      setHarry("Lumos");
    }
  };
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
      />

      <Home home={home} scrollToSection={scrollToSection} footer={footer} />
      <Project projects={projects} />

      <Skill skills={skills} />
      <About about={about} />

      <Footer footer={footer} />
    </main>
  );
}

export default App;
