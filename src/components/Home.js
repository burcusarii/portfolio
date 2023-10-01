import React from "react";

function Home({ home }) {
  return (
    <div
      ref={home}
      id="home"
      className="h-screen flex items-center relative top-0 justify-end"
    >
      <img
        className="w-1/3	"
        src="https://i.pinimg.com/originals/8d/c3/bf/8dc3bf24f2cc78b5176af3c435066807.png"
        alt=""
      />
      <h1 className="text-5xl text-white font-bold mr-20 text-right	w-2/3	">
        Hello, I'm Burcu SARI. <br /> I'm a Frontend Developer
      </h1>
    </div>
  );
}

export default Home;
