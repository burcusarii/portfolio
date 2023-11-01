import tictactoe from "../assets/images/tictactoe.jpg";
import todoapp from "../assets/images/todoapp.jpg";
import translate from "../assets/images/translate.jpg";
import github from "../assets/images/githubusers.jpg";
import ProjectsCard from "../assets/ProjectsCard";
import css from "../assets/images/css-3.png";
import html from "../assets/images/html5.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import bootstrap from "../assets/images/bootstrap.png";
function Project({ projects, textColor, show }) {
  return (
    <div
      ref={projects}
      id="project"
      className={` flex justify-center items-center h-screen ${
        show ? "active-project" : "hidden-project"
      }  ${textColor}`}
    >
      <div className="	w-10/12 m-auto flex flex-col justify-between h-4/6	">
        <h2 className={`text-3xl text-center  font-bold	`}>My Projects</h2>
        <div className=" grid grid-cols-4  pt-6  gap-4 justify-items-center">
          <ProjectsCard
            technology={[html, css, js, react]}
            project_name={"To Do App with React"}
            project_link={
              "https://github.com/burcusarii/todoapp-with-context-api"
            }
            project_preview={"https://todoappwreact.netlify.app/"}
            project_img={todoapp}
          ></ProjectsCard>
          <ProjectsCard
            project_name={"Tic Tac Toe"}
            project_link={"https://github.com/burcusarii/tic-tac-toe-react"}
            project_preview={"https://tictactoewreact.netlify.app/"}
            project_img={tictactoe}
            technology={[html, css, js, react]}
          ></ProjectsCard>
          <ProjectsCard
            project_name={"Github Users"}
            project_link={"https://github.com/burcusarii/github-users"}
            project_preview={"https://findgithubusers1.netlify.app/"}
            project_img={github}
            technology={[html, css, js, bootstrap]}
          ></ProjectsCard>
          <ProjectsCard
            project_name={"Translate App"}
            project_link={"https://github.com/burcusarii/translate-api"}
            project_preview={"https://translateapp-burcu.netlify.app/"}
            project_img={translate}
            technology={[html, css, js]}
          ></ProjectsCard>
        </div>
      </div>
    </div>
  );
}

export default Project;
