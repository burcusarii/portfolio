import React from "react";
import TypewriterComponent from "typewriter-effect";
function Home({ home, footer, scrollToSection }) {
  return (
    <div
      ref={home}
      id="home"
      className="h-screen flex flex-col items-center gap-y-5 relative top-0 justify-center"
    >
      <h1 className="text-5xl text-black font-bold  text-center	w-2/3	animate__animated animate__pulse">
        Hello, I'm Burcu SARI. <br />
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm a Frontend Developer")

              .start();
          }}
        />
      </h1>
      <button
        onClick={() => scrollToSection(footer)}
        className="border border-black	px-9 py-2 mt-5 bg-red-50	 duration-300	 hover:bg-red-200 animate__animated animate__swing"
      >
        Contact Me!
      </button>
    </div>
  );
}

export default Home;
