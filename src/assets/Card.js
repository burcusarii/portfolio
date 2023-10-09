import React from "react";

function Card({ project_name, project_link }) {
  return (
    <div className="card w-44 h-64 bg-red-600 rounded-2xl flex flex-col justify-between items-center p-5 text-center">
      <h3>{project_name}</h3>
      <p>
        <a href={project_link}> Github Linki</a>
      </p>
    </div>
  );
}

export default Card;
