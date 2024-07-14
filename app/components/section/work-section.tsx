import Button from "../ui/button";

export default function Work() {
  return (
    <section className="flex justify-center mt-6 mx-auto text-left">
      <article>
        <h1 className="font-semibold text-xl">Work</h1>
        <p className="max-w-[500px] p-2">
          Hi, there!, my name is Angel Nieto, Developer Front-End and Developer
          Golang.{" "}
        </p>
        <p className="max-w-[500px] p-2">
          I started in 2022 with my first HTML learning, then I learned other
          languages, entering my passion into development a little more, until
          now, in 2024, I have created many important projects for my
          development and growth.
        </p>
        <p className="p-2 max-w-[500px]">
          Learning Development in Go (Golang), creating several projects,
          although right now I am learning this language (very open), I learned
          a Framework called Svelte, developing several open projects with
          Svelte to continue advancing much further.
        </p>
        <div className="w-[200px] mx-auto mt-2">
          <Button link="/work">My Portfolio</Button>
        </div>
      </article>
      <article></article>
    </section>
  );
}
