import React from "react";
function ProjectsCard({
  project_name,
  project_link,
  project_preview,
  project_img,
  technology,
}) {
  return (
    <div className="projects-card w-56 h-72 bg-transparent   rounded-2xl flex flex-col gap-y-2 p-4">
      <img src={project_img} alt="" className="rounded-2xl flex-1 h-1/2" />

      <div className="flex-1 flex-col flex justify-between">
        <h3 className="text-l	text-center">{project_name}</h3>
        <div className="flex gap-2 w-full justify-center">
          {technology.map((item, index) => {
            return <img key={index} src={item} className="w-6" />;
          })}
        </div>
        <div
          className=" flex justify-center
      gap-x-4"
        >
          <a
            href={project_link}
            target="_blank"
            className="bg-[#CC7351] hover:bg-[#DED7B1] duration-300 px-4 py-1 rounded-xl"
          >
            {" "}
            Github
          </a>
          <a
            href={project_preview}
            target="_blank"
            className="bg-[#CC7351] hover:bg-[#DED7B1]  duration-300 px-4 py-1 rounded-xl"
          >
            {" "}
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
