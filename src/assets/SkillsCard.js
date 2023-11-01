import React from "react";

function SkillsCard({ img, title }) {
  return (
    <div className=" p-9 shadow-2xl rounded-2xl skills-card ">
      <h4 className="pb-2 text-sm font-bold">{title}</h4>
      <img src={img} alt="html" />
    </div>
  );
}

export default SkillsCard;
