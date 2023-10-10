import React from "react";

function Footer({ footer }) {
  return (
    <div
      ref={footer}
      id="footer"
      className="flex justify-center items-center h-40			 bg-gradient-to-r from-violet-800 to-violet-400"
    >
      Copyright © 2023. All Right Reserved by Burcu İrem Sarı
    </div>
  );
}

export default Footer;
