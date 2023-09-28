import React from "react";
import background from "../images/bg.jpeg";

function Header() {
  return (
    <div
      className="bg-black text-white  h-screen bg-center bg-cover bg-no-repeat absolute top-0 right-0 left-0 flex flex-row justify-center items-center 		"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1
        className="text-5xl font-bold
"
      >
        Burcu İrem SARI{" "}
      </h1>
    </div>
  );
}

export default Header;
