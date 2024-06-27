import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <section
        className="md:w-[500px] w-[100%] mx-auto text-center mt-[20px]"
        id="anim-dv"
      >
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
      </section>
    </main>
  );
}

export default App;
