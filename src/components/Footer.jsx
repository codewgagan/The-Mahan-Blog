import React from "react";
import { assets, footer_data } from "../assets/assets.js";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flexx-row items-start justify-between gap-10 py-10 border-gray-500/30 text-gray-500">
        <div>
          {/* first column */}
          {/* logo */}
          <img
            src={assets.The_Mahan_Blog}
            className="w-32 sm:w-44 cursor-pointer"
            alt="logo"
          />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            omnis, odio necessitatibus similique neque doloribus corporis
            tempora? Nisi iusto, fugit nam impedit ipsa accusamus sapiente vero
            nobis atque ratione aspernatur.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {/* second column */}
          {footer_data.map((section, index) => (
            <div key={index}>
                <h3 className="font-semiblod text-base text-gray-900 md:mb-5">{section.title} </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        {/* copyright msg */}
        Copyright © {currentYear} The Mahan Blog
      </p>
    </div>
  );
};

export default Footer;
