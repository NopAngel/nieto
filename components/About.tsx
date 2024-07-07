import { LinkPreview } from "./ui/link-preview";

const About = () => {
  return (
    <section
      className="md:w-[450px] md:m-auto sm:w-full p-2 grid grid-cols-1 gap-y-3"
      id="about"
    >
      <div className="p-2">
        <h1 className="font-bold p-3">About</h1>

        <p className="opacity-70">
          Hello!, my name is Angel Nieto, or I am also known as Nieto. In 2023 I
          saw my great passion for Learning web design, so I did my first HTML5
          project, and from there I continued advancing my Stacks.
        </p>
      </div>
      <div className="p-2">
        <h1 className="font-bold p-3">Now</h1>
        <p className="opacity-70">
          Currently I do simple{" "}
          <LinkPreview url="https://go.dev" className="font-bold">
            Golang
          </LinkPreview>{" "}
          App's projects using Go and Javascript, but my passion for web
          development still continues.
        </p>
      </div>
    </section>
  );
};

export default About;
