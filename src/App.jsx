import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main>
      <section
        className="md:w-[500px] w-[100%] mx-auto text-center mt-[60px]"
        id="anim-dv"
      >
        <Sidebar />
        <Home />
        <About />
        <Project />
        <Contact />
      </section>
    </main>
  );
}

export default App;
