import { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ScrollToTop from "./assets/ScrollToTop";

function App() {
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

  return (
    <main>
      <ScrollToTop />
      <Navbar
        scrollToSection={scrollToSection}
        about={about}
        home={home}
        projects={projects}
        skills={skills}
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
