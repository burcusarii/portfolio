import React from "react";
import TypewriterComponent from "typewriter-effect";
import burcu from "../assets/images/burcu.png";
function Home({ home, footer, scrollToSection }) {
  return (
    <div ref={home} id="home" className="flex justify-center items-center">
      <div className="flex items-center justify-center w-10/12">
        <div className="h-screen flex  flex-col  gap-y-5 justify-center  items-start w-3/5">
          <h1 className="text-5xl font-bold 	animate__animated animate__pulse home-text">
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
        <div className=" w-1/2 ">
          <img src={burcu} alt="" className="w-4/5 m-auto img-shadow" />
        </div>
      </div>
    </div>
  );
}

export default Home;
