"use client";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: "projects/project1.webp",
    name: "first project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius odio hic reprehenderit nobis rem quisquam ipsa sequi, ducimus recusandae iusto laborum obcaecati cupiditate reiciendis provident, perspiciatis minima atque! Eaque!",
  },
  {
    id: 2,
    img: "projects/project2.webp",
    name: "second project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius odio hic reprehenderit nobis rem quisquam ipsa sequi, ducimus recusandae iusto laborum obcaecati cupiditate reiciendis provident, perspiciatis minima atque! Eaque!",
  },
  {
    id: 3,
    img: "projects/project3.webp",
    name: "third project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius odio hic reprehenderit nobis rem quisquam ipsa sequi, ducimus recusandae iusto laborum obcaecati cupiditate reiciendis provident, perspiciatis minima atque! Eaque!",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="scroll-mb-25">
      <Page />
    </div>
  );
}

const Page = () => {
  return (
    <div className="w-7xl h-221.25 py-20 px-8 mx-auto">
      <h2 className="border-b border-gray-200 pb-5  text-3xl font-medium tracking-wider capitalize">
        web creations
      </h2>
      <div className="py-16 w-304 min-h-167 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item) => (
          <Project
            key={item.id}
            projectImg={item.img}
            projectName={item.name}
            aboutProject={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const Project = ({ projectImg, projectName, aboutProject }) => {
  return (
    <div className="min-h-135 w-[384px] shadow-md hover:shadow-xl rounded-lg transition duration-300">
      <img
        className="w-full rounded-t-lg object-cover h-64"
        src={projectImg}
        alt="The Image of The Project"
      />
      <div className="p-8 capitalize flex flex-col gap-4">
        <h2 className="text-xl tracking-wide font-medium">{projectName}</h2>
        <p className="text-slate-700 leading-loose">{aboutProject}</p>
        <div className="flex gap-4 ">
          <a
            href="https://github.com/Orgil-byte/tailwind-portfolio"
            target="_blank"
          >
            <img
              className="w-8 h-8 object-cover opacity-50 hover:opacity-100 transition duration-300 delay-75 ease-out"
              src="projects/github.png"
              alt="Project codes"
            />
          </a>
          <a
            href="https://tailwind-portfolio-steel-chi.vercel.app/"
            target="_blank"
          >
            <img
              className="w-8 h-8 object-cover opacity-50 hover:opacity-100 transition duration-300 delay-75 ease-out"
              src="projects/link.png"
              alt="Project link"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
