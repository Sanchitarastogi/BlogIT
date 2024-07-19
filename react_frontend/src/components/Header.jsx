import React from "react";
import logo from "../public/BlogIT.png";

export const Header = () => {
  return (
    <div className="flex justify-between item-center ">
      <img className="w-[200px]" src={logo} alt="BlogIT Logo thynk unlimited" />
      <ul className="flex gap-12 px-[100px] pt-[40px]">
        <li className="hover:font-bold cursor-pointer">Home</li>
        <li className="hover:font-bold cursor-pointer">
          {" "}
          <a href="#post" tabIndex="0" className="anchor">
            Post Blog{" "}
          </a>
        </li>
        <li className="hover:font-bold cursor-pointer">
          <a href="#footer" className="anchor">
            Contact Us{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};
