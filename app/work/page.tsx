import React from "react";
import Card from "../components/ui/card";

export default function Work() {
  return (
    <div className="h-[90vh]">
      <h1 className="text-3xl font-bold mb-6">Works</h1>
      <section className="grid grid-cols-2 gap-2">
        <Card
          Title="Spotify Clone"
          Description="This is a Spotify clone, very comfortable and flexible"
          Href="https://github.com/NopAngel/spotify-app/"
          Img="/works/spot-clone.png"
        />
        <Card
          Title="Emoji App"
          Description="This is an Emojis application, where you can find your favorite emojis"
          Href="https://github.com/NopAngel/emojix/"
          Img="/works/emoji-app.png"
        />
        <Card
          Title="Book App"
          Description="This is a Books application, where you can find your favorite Books"
          Href="https://github.com/NopAngel/spotify-app/"
          Img="/works/book-app.png"
        />
      </section>
    </div>
  );
}
