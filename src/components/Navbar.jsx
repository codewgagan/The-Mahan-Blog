import React from "react";
import {assets} from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
      <img src={assets.The_Mahan_Blog} alt="logo" className="w-32 sm:w-44" />
      <button className="flex items-center bg-blue-600 rounded-full px-10 py-2.5 gap-2 text-white cursor-pointer text-sm">Login 
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};

export default Navbar;
