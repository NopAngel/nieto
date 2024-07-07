import { LinkPreview } from "../ui/link-preview";

const Card = ({
  title,
  image,
  link,
  tags,
  descriptions,
  web,
}: {
  title: string;
  image: string;
  link: string;
  tags: any;
  descriptions: string;
  web: string;
}) => {
  return (
    <article className="w-[400px] mx-auto m-6">
      <header className="flex items-center gap-2 w-full justify-between">
        <section className="flex items-center gap-3">
          <img className="w-[50px] rounded-md" src={image} alt={title} />
          <h1>{title}</h1>
        </section>
        <section>
          <a href={link} target="_blank">
            <img src="/github.svg" alt="GitHub Logo" />
          </a>
        </section>
      </header>
      <section>
        <p className="p-2 opacity-50">{descriptions}</p>
      </section>
      <footer>
        <article className="flex gap-2">
          <LinkPreview url={web}>
            <section className="flex">
              {tags.map((i, index): TagElement => (
                <div
                  key={index}
                  className="bg-zinc-950/55 backdrop-blur-sm rounded-xl border-2 border-zinc-900 p-1 font-mono"
                >
                  <span>{i}</span>
                </div>
              ))}
            </section>
          </LinkPreview>
        </article>
      </footer>
    </article>
  );
};

export default Card;
