import React from "react";

function Contact() {
  return (
    <div className="bg-[rgb(26,25,27)] rounded-xl p-[10px]">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-left p-[6px] opacity-50 mb-[10px]">
        Connect to my GitHub to view/verify my projects. Or you can click the
        button for more information.
      </p>
      <a
        href="mailto:mygmail@gmail.com"
        className="w-[200px] bg-white text-black p-[6px] rounded-full"
      >
        Contact Now.
      </a>
    </div>
  );
}

export default Contact;
