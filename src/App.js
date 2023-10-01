import { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ScrollToTop from "./assets/ScrollToTop";

function App() {
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

  return (
    <main className="bg-gradient-to-r from-violet-900 to-violet-500">
      <ScrollToTop />
      <Navbar
        scrollToSection={scrollToSection}
        about={about}
        home={home}
        projects={projects}
        skills={skills}
        contact={contact}
      />

      <Home home={home} />
      <About about={about} />
      <Project projects={projects} />

      <Skill skills={skills} />
      <Contact contact={contact} />
    </main>
  );
}

export default App;
