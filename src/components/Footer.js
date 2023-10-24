import React from "react";

function Footer({ footer, textColor }) {
  return (
    <div
      ref={footer}
      id="footer"
      className={`flex justify-center items-center h-20 ${textColor}`}
    >
      Copyright © 2023. All Right Reserved by Burcu İrem Sarı
    </div>
  );
}

export default Footer;
