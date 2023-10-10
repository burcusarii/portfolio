import React from "react";

function Card({ project_name, project_link }) {
  return (
    <div className="card w-48 h-64 bg-red-600 rounded-2xl flex flex-col items-center justify-between p-5 text-center text-black text-xl">
      <h3>{project_name}</h3>

      <div
        className=" flex 
      gap-x-4"
      >
        <button>
          <a href={project_link}> Github</a>
        </button>
        <button>
          <a href={project_link}> Preview</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
