"use client";
import { useState } from "react";

export default function Coffee() {
  return (
    <div id="about" className="scroll-mt-25">
      <Page />
    </div>
  );
}

const Page = () => {
  return (
    <div className="py-20 w-full h-104">
      <div className="mx-auto w-7xl grid grid-cols-2 items-center gap-16 px-8">
        <img
          className="h-64 w-xl object-center"
          src="coffee/about.svg"
          alt=""
        />
        <div className="h-64 w-xl flex flex-col gap-8">
          <h1 className="text-3xl font-medium tracking-wider pb-5 border-b border-gray-200">
            Code And Coffee
          </h1>
          <p className="text-slate-600 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, deleniti neque? Quo tenetur ipsam, facilis fugiat quasi,
            magnam consequuntur repellat itaque nisi rerum voluptatibus
            similique. Deleniti cumque quis suscipit cupiditate!
          </p>
        </div>
      </div>
    </div>
  );
};
