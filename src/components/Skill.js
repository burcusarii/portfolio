import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from "../assets/images/css-3.png";
import html from "../assets/images/html5.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import bootstrap from "../assets/images/bootstrap.png";
import Card from "../assets/Card";

function Skill({ skills, textColor, show }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3800, min: 2800 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2800, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 400 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      ref={skills}
      id="skill"
      className={` flex justify-center items-center h-screen`}
    >
      <div className="	w-8/12 m-auto flex flex-col justify-between h-2/5">
        <h2 className={`text-3xl text-center py-2 font-bold ${textColor}	`}>
          My Skills
        </h2>
        <Carousel
          responsive={responsive}
          className={`text-center ${textColor}`}
        >
          <div className="w-2/6">
            <h4 className="pb-2 text-xl font-bold">HTML</h4>
            <img src={html} alt="html" />
          </div>
          <div className="w-2/6">
            <h4 className="pb-2 text-xl font-bold">Css</h4>

            <img src={css} alt="css" />
          </div>
          <div className="w-2/6">
            <h4 className="pb-2 text-xl font-bold">JavaScript</h4>

            <img src={js} alt="javascript" />
          </div>
          <div className="w-2/6">
            <h4 className="pb-2 text-xl font-bold">React</h4>

            <img src={react} alt="react" />
          </div>
          <div className="w-2/6">
            <h4 className="pb-2 text-xl font-bold"> TailwindCSS</h4>

            <img src={tailwindcss} alt="tailwindcss" />
          </div>
          <div className="w-2/6">
            <h4 className="pb-2 text-xl font-bold">Bootstrap</h4>

            <img src={bootstrap} alt="bootstrap" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Skill;
