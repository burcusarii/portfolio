import React from "react";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";

function Contact({ contact, textColor }) {
  return (
    <div
      ref={contact}
      id="contact"
      className={`  ${textColor} flex justify-center items-center h-screen`}
    >
      <div className="	w-8/12 m-auto flex flex-col justify-between items-center h-1/2">
        <h2 className={`text-3xl text-center py-2 font-bold	`}>Contact Me!</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div>
              <CiPhone className="text-4xl" />
            </div>
            <div className="flex flex-col text-xl">
              <span className="font-bold">Call me</span>
              <span>0543 245 29 86</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <CiMail className="text-4xl" />
            </div>
            <div className="flex flex-col text-xl">
              <span className="font-bold">Text me</span>
              <span>burcusaridev@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <CiLocationOn className="text-4xl" />
            </div>
            <div className="flex flex-col text-xl">
              <span className="font-bold">Location</span>
              <span>İstanbul, Türkiye</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
