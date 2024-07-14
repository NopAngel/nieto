import React from "react";

export default function buttonNetwork({ children, icons, link }: any) {
  return (
    <a
      className="flex items-center justify-center gap-2 text-[#81e6d9] transition-all duration-100 hover:bg-[#81e6d9]/25 w-fit pl-3 pr-3 p-2 rounded-lg cursor-pointer"
      href={link}
      target="_blank"
    >
      <img src={icons} alt={children} />
      <span>{children}</span>
    </a>
  );
}
