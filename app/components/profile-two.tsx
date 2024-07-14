import Image from "next/image";
import React from "react";

export default function ProfileTwo() {
  return (
    <section className="flex xl:flex-row flex-col gap-2 items-center justify-center mt-6">
      <article className="text-left">
        <h1 className="text-3xl font-bold">Angel Nieto</h1>
        <h2 className="p-2 opacity-80">Developer Front-End (Designer Dev.).</h2>
      </article>
      <article>
        <img
          src="https://avatars.githubusercontent.com/u/155915830?v=4"
          alt="Angel Nieto - Avatar"
          className="w-[150px] rounded-full border-4 p-1"
        />
      </article>
    </section>
  );
}
