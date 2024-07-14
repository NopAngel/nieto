import React from "react";
import Profile from "./components/profile";
import ProfileTwo from "./components/profile-two";
import WorkSection from "./components/section/work-section";
import Bio from "./components/section/bio";
import ButtonTwo from "./components/ui/button-network";

export default function Page() {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <>
      <main>
        <section>
          <Profile />
          <ProfileTwo />
          <WorkSection />
          <Bio />
        </section>
        <section className="mt-10 mb-20">
          <h1 className="text-2xl font-bold">On the web</h1>
          <div className="w-[200px] mx-auto text-center grid grid-cols-2 gap-2">
            <ButtonTwo icons="/github.svg" link="https://github.com/NopAngel/">
              GitHub
            </ButtonTwo>
            <ButtonTwo
              icons="/twitter.svg"
              link="https://twitter.com/Nop_angel/"
            >
              Twitter
            </ButtonTwo>
          </div>
        </section>
      </main>
    </>
  );
}
