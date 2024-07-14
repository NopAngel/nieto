import React from "react";

export default function NavBar() {
  return (
    <header className="bg-transparent sticky top-0 backdrop-blur-sm p-3 z-50">
      <nav>
        <ul className="flex justify-around items-center *:items-center *:flex *:gap-3">
          <section>
            <li>
              <a href="/">
                <span className="text-xl font-semibold">NopAngel</span>
              </a>
            </li>
            <section className="flex ml-3 gap-2 xl:opacity-100 opacity-0">
              <li>
                <a href="/work">Works</a>
              </li>
            </section>
          </section>
          <section></section>
        </ul>
      </nav>
    </header>
  );
}
