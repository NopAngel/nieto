import React from "react";

function CardProject({ Title, Description }) {
  return (
    <div className="hover:bg-[rgb(26,25,27)] cursor-pointer p-[10px] w-[400px] mx-auo text-left rounded-xl m-[10px] transition-colors">
      <h1>{Title}</h1>
      <p className="text-xs p-[6px] opacity-50">{Description}</p>
    </div>
  );
}

function Project() {
  return (
    <article className="mt-[80px]">
      <h1 className="text-3xl font-semibold">My Projects.</h1>
      <div className="w-[90%] mx-auto text-center">
        <CardProject
          Title="Emoji's App."
          Description="Application Emoji's using Svelte and TailwindCSS"
        />
         <CardProject
          Title="Lingo App."
          Description="Application Duolingo using Next.js and TailwindCSS"
        />
        <CardProject
          Title="App Music"
          Description="Application Music using Next.js and TailwindCSS"
        />
      </div>
    </article>
  );
}

export default Project;
