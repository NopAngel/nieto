import Avatar from "../assets/avatars.jpeg";
import React from "react";

function Home() {
  return (
    <header
      className="flex 
    justify-center items-center text-left"
    >
      <div>
        <img src={Avatar} width={120} className="rounded-full" alt="" />
      </div>
      <div className="ml-[10px]">
        <h1 className="text-2xl">Angel Nieto.</h1>
        <p className="text-gray-400">Junior Developer - Front-End.</p>
      </div>
    </header>
  );
}

export default Home;
