import React from "react";

function About() {
  return (
    <div className="md:w-[500px] w-[400px] mx-auto mt-[80px] text-left">
      <article>
        <h1 className="mb-[30px] text-xl">About</h1>
        <p className="opacity-50">
          Hello!, my name is Angel Nieto, or I am also known as Nieto. In 2023 I
          saw my great passion for Learning web design, so I did my first HTML5
          project, and from there I continued advancing my Stacks.
        </p>
      </article>
      <article className="mt-[90px]">
        <h1 className="mb-[30px] text-xl">Now</h1>
        <p className="opacity-50">
          Currently I do simple Desktop App projects using Go and Javascript,
          but my passion for web development still continues.
        </p>
      </article>
    </div>
  );
}

export default About;
