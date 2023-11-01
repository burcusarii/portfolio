import React from "react";
import "react-multi-carousel/lib/styles.css";
import css from "../assets/images/css-3.png";
import html from "../assets/images/html5.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import bootstrap from "../assets/images/bootstrap.png";
import SkillsCard from "../assets/SkillsCard";
function Skill({ skills, textColor }) {
  return (
    <div
      ref={skills}
      id="skill"
      className={` flex justify-center items-center h-screen`}
    >
      <div className="	w-7/12 m-auto flex flex-col justify-between h-5/6">
        <h2 className={`text-3xl text-center py-2 font-bold ${textColor}	`}>
          My Skills
        </h2>
        <div
          className={`text-center ${textColor} grid grid-cols-3 gap-x-44 gap-y-8`}
        >
          <SkillsCard img={html} title={"HTML"} />
          <SkillsCard img={css} title={"CSS"} />
          <SkillsCard img={js} title={"JAVASCRIPT"} />
          <SkillsCard img={react} title={"REACT JS"} />
          <SkillsCard img={tailwindcss} title={"TAILWIND"} />
          <SkillsCard img={bootstrap} title={"BOOTSTRAP"} />
        </div>
      </div>
    </div>
  );
}

export default Skill;
