import React from "react";

function Contact({ contact }) {
  return (
    <div
      ref={contact}
      id="contact"
      className="flex justify-center items-center h-screen"
    >
      <div className="	w-11/12		m-auto	 text-white">
        <h2 className="text-3xl text-center py-2 font-bold">Contact me!</h2>
        <div className="flex gap-4">
          <div className="w-3/5">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80"
              alt=""
            />
          </div>
          <div className="text-justify">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
              saepe. Provident delectus similique nesciunt soluta corrupti nam.
              Quaerat odio ab, deleniti minima consequatur aliquam. Doloremque
              exercitationem porro explicabo sapiente repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              autem consequuntur, laboriosam, unde necessitatibus eius quo
              deserunt ea quisquam soluta dolorem est a tempora repudiandae
              molestias nulla placeat! Aliquam, eveniet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
