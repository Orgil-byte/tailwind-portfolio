"use client";
import { useState } from "react";

export default function Header() {
  return (
    <div id="home" className="scroll-mt-25">
      <Nav />
      <HeaderPage />
    </div>
  );
}

const Nav = () => {
  return (
    <div className="w-full h-25 bg-emerald-100 fixed">
      <div className="h-25 max-w-7xl mx-auto p-8 flex items-center gap-16">
        <h1 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h1>
        <div className="flex gap-3">
          <a
            className="text-lg tracking-wider hover:text-emerald-600 duration-300"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-lg tracking-wider hover:text-emerald-600 duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-lg tracking-wider hover:text-emerald-600 duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-lg tracking-wider hover:text-emerald-600 duration-300"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

const HeaderPage = () => {
  return (
    <div className="w-full h-168 bg-emerald-100 pb-24 pt-49">
      <div className="max-w-7xl h-96 flex px-8 gap-8 mx-auto items-center">
        <div className="w-148">
          <h1 className="text-7xl font-bold tracking-wider">I'm John</h1>
          <p className="mt-4 text-3xl text-slate-700 tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700  tracking-wide">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex mt-4 gap-4">
            <a href="https://github.com/" target="_blank">
              <img
                className="w-8 h-8 object-cover opacity-50 hover:opacity-100 transition duration-300 cursor-pointer"
                src="header/github.png"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                className="w-8 h-8 object-cover opacity-50 hover:opacity-100 transition duration-300 cursor-pointer"
                src="header/linkedin.png"
                alt="linkedn"
              />
            </a>
            <a href="https://x.com/" target="_blank">
              <img
                className="w-8 h-8 object-cover opacity-50 hover:opacity-100 transition duration-300 cursor-pointer"
                src="header/twitter.png"
                alt="twitter/X"
              />
            </a>
          </div>
        </div>
        <img className="h-96 w-auto" src="header/hero.svg" alt="hero img" />
      </div>
    </div>
  );
};
