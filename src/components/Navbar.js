function Navbar({ scrollToSection, home, about, projects, skills, contact }) {
  return (
    <nav className="p-4  bg-transparent text-white 	fixed right-0 top-0 left-0 z-10">
      <ul className="list-none flex place-content-center gap-8  text-2xl navbar">
        <li onClick={() => scrollToSection(home)}>Home</li>
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(skills)}>Skills</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
