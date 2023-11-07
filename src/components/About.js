import React from "react";
import burcu from "../assets/images/burcu-2.jpeg";
function About({ about, textColor, show }) {
  return (
    <div
      ref={about}
      id="about"
      className={`mt-40 sm:mt-0 flex justify-center items-center sm:h-screen `}
    >
      <div className={`w-8/12		m-auto  ${textColor}`}>
        <h2 className={`text-3xl text-center py-4 font-bold ${textColor}	`}>
          About Me!{" "}
        </h2>{" "}
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="">
            <img className="w-full rounded-full" src={burcu} alt="" />
          </div>
          <div className="text-justify">
            <p>
              As a candidate who transitioned into the frontend field with a
              constant desire for self-improvement, I learned HTML, CSS,
              JavaScript, and the React library on my own. I practiced creating
              user-friendly and interactive web interfaces to enhance my skills.
              Throughout this process, I engaged in project-based work, using my
              fast learning ability, as well as my creative and analytical
              thinking skills.
            </p>
            <br />{" "}
            <p>
              During my university life, I actively participated in club
              activities within "IEEE-KTU Student Branch." Likewise, in my
              professional life, I engaged in team collaborations. Therefore, I
              am someone who works collaboratively and possesses communication
              skills that enable me to adapt to team environments. I believe
              that with my motivation, eagerness to learn, and my constant goal
              of self-improvement, I will add value to the projects I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
