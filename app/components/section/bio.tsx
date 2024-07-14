import React from "react";

export default function Bio() {
  return (
    <section className="mt-6">
      <div>
        <h1 className="text-3xl font-bold border-b-2 w-[40px] mx-auto border-zinc-500">
          Bio
        </h1>
      </div>
      <section className="*:flex *:items-center *:justify-center *:text-left *:w-[400px] *:mx-auto *:gap-2 mt-6 *:mt-6 *:xl:flex-row *:flex-col *:justify-center">
        <div>
          <h1 className="text-xl font-semibold">2023</h1>
          <p className="w-full">
            My first Full Stack project.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">2023</h1>
          <p>Video Game Creation (Unity)</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">2024</h1>
          <p>My first Snippets application</p>
        </div>
      </section>
    </section>
  );
}
