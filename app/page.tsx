import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import { FloatingNav } from "@/components/ui/navbar";

const Main = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
  ];
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <section className="xl:w-[800px] w-full xl:m-auto">
        <section>
          <Hero />
          <About />
          <Projects />
        </section>
      </section>
    </main>
  );
};

export default Main;
