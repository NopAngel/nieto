import { FiHome, FiGithub } from "react-icons/fi";
import React from "react";

function Sidebar() {
  return (
    <nav
      className="sticky top-6 z-20 bg-[rgba(26,25,27,0.44)] backdrop-blur-sm w-[200px] border-neutral-800 mx-auto rounded-xl"
      id="anim-dv"
    >
      <ul className="flex justify-center *:p-[6px] *:text-2xl">
        <li>
          <a href="/">
            <FiHome />
          </a>
        </li>

        <li>
          <a href="https://github.com/NopAngel/nieto.com">
            <FiGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
