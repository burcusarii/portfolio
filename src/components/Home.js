import React from "react";
import TypewriterComponent from "typewriter-effect";
function Home({ home, footer, scrollToSection }) {
  return (
    <div>
      <div
        ref={home}
        id="home"
        className="h-screen flex  flex-col  gap-y-5 justify-center pl-20 items-start"
      >
        <h1 className="text-5xl k font-bold w-2/3	animate__animated animate__pulse home-text">
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
          className="border rounded-2xl		border-black	px-9 py-2 mt-5 duration-300	bg-secondary-color  hover:bg-light-green animate__animated animate__swing"
        >
          Contact Me!
        </button>
      </div>
    </div>
  );
}

export default Home;
