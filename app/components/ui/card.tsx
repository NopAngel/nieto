import React from "react";

export default function Card({ Title, Img, Description, Href }: any) {
  return (
    <a href={Href} target="_blank">
      <article className="bg-transparent/55 h-[250px] shadow-sm rounded-sm p-2">
        <img src={Img} className="w-[400px]" alt={Title} />
        <section>
          <h1 className="text-2xl font-bold">{Title}</h1>
          <p className="text-left opacity-50">{Description}</p>
        </section>
      </article>
    </a>
  );
}
