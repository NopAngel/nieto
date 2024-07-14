import React from "react";

export default function Button({ children, link }: any) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-[#81e6d9] text-black p-2 pl-3 pr-3 rounded-lg cursor-pointer"
    >
      <span>{children}</span>
    </a>
  );
}
