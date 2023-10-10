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
        <div className=" grid grid-cols-4  pt-6  gap-4 justify-items-center">
          <Card
            project_name={"To Do App with React"}
            project_link={
              "https://github.com/burcusarii/todoapp-with-context-api"
            }
          ></Card>
          <Card
            project_name={"Tic Tac Toe"}
            project_link={"https://github.com/burcusarii/tic-tac-toe-react"}
          ></Card>
          <Card
            project_name={"Github Users"}
            project_link={"https://github.com/burcusarii/github-users"}
          ></Card>
          <Card
            project_name={"Translate App"}
            project_link={"https://github.com/burcusarii/translate-api"}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
