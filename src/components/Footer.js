import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="flex justify-center items-center h-52			 bg-gradient-to-r from-violet-800 to-violet-400"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>LinkedIn</div>
        <div>Github</div>
        <div>Twitter</div>
        <div>E-Posta</div>
      </div>
    </div>
  );
}

export default Footer;
