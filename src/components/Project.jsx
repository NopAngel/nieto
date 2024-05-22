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
          Title="UI Snippet"
          Description="Application that allows you to give ideas for new Component Snippets."
        />
        <CardProject
          Title="Logo Maker."
          Description="
Application used to color icons."
        />
        <CardProject
          Title="Anim.Dev"
          Description="Application that allows you to animate components."
        />

        <h1 className="text-3xl font-semibold">Projects on Process...</h1>
        <div>
          <div className="w-[400px] mx-auto mt-[60px] text-left bg-[rgb(26,25,27)] p-[10px] rounded-xl mb-[60px]">
            <h1 className="text-center text-3xl font-semibold">MaterialDX</h1>
            <p className="text-xs opacity-50 p-[6px]">
              A Project that allows using components in Code, is used only for
              Nextjs and Reactjs, using TailwindCSS as the main
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
