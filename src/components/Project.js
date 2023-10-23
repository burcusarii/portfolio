import { useEffect, useState } from "react";
import tictactoe from "../assets/images/tictactoe.jpg";
import todoapp from "../assets/images/todoapp.jpg";
import translate from "../assets/images/translate.jpg";
import github from "../assets/images/githubusers.jpg";

import Card from "../assets/Card";
function Project({ projects, textColor }) {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div
      ref={projects}
      id="project"
      className={` flex justify-center items-center h-screen ${
        show ? "active-project" : "hidden-project"
      }`}
    >
      <div className="	w-11/12 m-auto flex flex-col justify-between">
        <h2 className={`text-3xl text-center py-2 font-bold ${textColor}	`}>
          My Projects
        </h2>
        <div className=" grid grid-cols-4  pt-6  gap-4 justify-items-center">
          <Card
            project_name={"To Do App with React"}
            project_link={
              "https://github.com/burcusarii/todoapp-with-context-api"
            }
            project_preview={"https://todoappwreact.netlify.app/"}
            project_img={todoapp}
          ></Card>
          <Card
            project_name={"Tic Tac Toe"}
            project_link={"https://github.com/burcusarii/tic-tac-toe-react"}
            project_preview={"https://tictactoewreact.netlify.app/"}
            project_img={tictactoe}
          ></Card>
          <Card
            project_name={"Github Users"}
            project_link={"https://github.com/burcusarii/github-users"}
            project_preview={"https://findgithubusers1.netlify.app/"}
            project_img={github}
          ></Card>
          <Card
            project_name={"Translate App"}
            project_link={"https://github.com/burcusarii/translate-api"}
            project_preview={"https://translateapp-burcu.netlify.app/"}
            project_img={translate}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
