"use client";
import { useState } from "react";

const data = [
  {
    id: 1,
    skillLogo: "techstack/html.svg",
    skillName: "HTML&CSS",
    aboutSkill:
      "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: 2,
    skillLogo: "techstack/javascript.svg",
    skillName: "Javascript",
    aboutSkill:
      "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: 3,
    skillLogo: "techstack/react.png",
    skillName: "React",
    aboutSkill:
      "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export default function TechStack() {
  return (
    <div id="skills" className="scroll-mt-25">
      <Page />
    </div>
  );
}

const Page = () => {
  return (
    <div className="w-7xl h-134.25  mx-auto py-20 px-8">
      <h2 className="pb-5 border-b border-gray-200 text-3xl font-medium tracking-wider">
        Tech Stack
      </h2>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 min-w-304 min-h-80">
        {data.map((item) => (
          <Content
            key={item.id}
            skillLogo={item.skillLogo}
            skillName={item.skillName}
            aboutSkill={item.aboutSkill}
          />
        ))}
      </div>
    </div>
  );
};

const Content = ({ skillLogo, skillName, aboutSkill }) => {
  return (
    <div className="w-96 h-48 flex flex-col">
      <img
        className="h-16 w-16 object-cover"
        src={skillLogo}
        alt="tech stack"
      />
      <h4 className="mt-6 font-bold">{skillName}</h4>
      <p className="mt-2 text-slate-500">{aboutSkill}</p>
    </div>
  );
};
