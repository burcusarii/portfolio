import React from "react";
import Card from "../assets/Card";
function Project({ projects }) {
  return (
    <div
      ref={projects}
      id="project"
      className="flex justify-center items-center h-screen"
    >
      <div className="	w-11/12		m-auto text-white flex flex-col ">
        <h2 className="text-3xl text-center py-2 font-bold">My Project</h2>
        <div className=" grid grid-cols-5 pt-6  gap-4 justify-items-center	">
          <Card
            project_name={"Github Kullanıcı Bulma"}
            project_link={"www.github.com"}
          ></Card>
          <Card
            project_name={"Github Kullanıcı Bulma"}
            project_link={"www.github.com"}
          ></Card>
          <Card
            project_name={"Github Kullanıcı Bulma"}
            project_link={"www.github.com"}
          ></Card>
          <Card
            project_name={"Github Kullanıcı Bulma"}
            project_link={"www.github.com"}
          ></Card>
          <Card
            project_name={"Github Kullanıcı Bulma"}
            project_link={"www.github.com"}
          >
            {" "}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
