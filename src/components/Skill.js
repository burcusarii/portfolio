import React from "react";
import css from "../assets/images/css-3.png";
import html from "../assets/images/html5.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import bootstrap from "../assets/images/bootstrap.png";

function Skill({ skills, textColor }) {
  return (
    <div
      ref={skills}
      id="skill"
      className={`flex justify-center items-center h-screen ${textColor}`}
    >
      <div className="	w-11/12		m-auto flex-col flex  h-2/4	 justify-between">
        <h2 className="text-5xl text-center py-2 font-bold">My Skills</h2>
        <div className="flex gap-12	 pt-5 skills justify-between items-center">
          <div className="w-1/6 ">
            <img src={html} alt="" />
          </div>
          <div className="w-1/6">
            <img src={css} alt="" />
          </div>
          <div className="w-1/6">
            <img src={js} alt="" />
          </div>
          <div className="w-1/6">
            <img src={react} alt="" />
          </div>
          <div className="w-1/6">
            <img src={tailwindcss} alt="" />
          </div>
          <div className="w-1/6">
            <img src={bootstrap} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
