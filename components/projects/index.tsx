import Card from "./card_projects";

const Projects = () => {
  const data_projects = [
    {
      img: "https://raw.githubusercontent.com/NopAngel/lingo-app/7bf2a6e01b065308dc24cb36b324cee57b7d7c6a/public/mascot.svg",
      title: "lingo-project",
      description: "This is a clone of Duolingo, a simple and complete clone.",
      linkGithub: "https://github.com/NopAngel/lingo-app",
      web: "https://www.nextjs.org",
    },
    {
      img: "https://github.com/NopAngel/emojix/blob/main/public/logo.png?raw=true",
      title: "emojix",
      description: "An application to have emojis much easier.",
      linkGithub: "https://github.com/NopAngel/emojix",
      web: "https://www.svelte.dev",
    },
    {
      img: "https://th.bing.com/th/id/OIP.0I3yQqIUvI5HJKL3Rs6JLwHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
      title: "hangman",
      description: "A Hangman app to move your little hands.",
      linkGithub: "https://github.com/NopAngel/hangman-golang",
      web: "https://go.dev/",
    },
  ];
  return (
    <section
      className="md:w-[800px] md:m-auto sm:w-full xl:p-2 text-center"
      id="project"
    >
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="p-2 opacity-50">
        These are some of my projects that I have created in my career.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 xl:w-[900px] w-full">
        {data_projects.map(
          (index, item): DataProjects => (
            <Card
              title={index.title}
              descriptions={index.description}
              image={index.img}
              link={index.linkGithub}
              key={item}
              web={index.web}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
