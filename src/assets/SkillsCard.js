import React from "react";

function SkillsCard({ img, title }) {
  return (
    <div className="w-48 h-56 bg-transparent  p-9 shadow-2xl rounded-2xl skills-card ">
      <h4 className="pb-2 text-sm font-bold">{title}</h4>
      <img src={img} alt="html" />
    </div>
  );
}

export default SkillsCard;
