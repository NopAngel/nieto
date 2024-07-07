import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex items-center gap-6 w-full justify-center mt-6 xl:flex-row flex-col">
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#444"
        />
      </div>

      <div>
        <h1 className="text-3xl font-semibold">Angel Nieto.</h1>
        <p className="p-2 opacity-50">Developer Front-End.</p>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/155915830?v=4"
          alt="Angel, Nieto. | Developer Front-End."
          className="rounded-full w-[200px]"
        />
      </div>
    </section>
  );
};

export default Hero;
