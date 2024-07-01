import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = ["pricing", "benefits", "services", "contact"];
const linkso = [
  {
    title: "Benefits",
    href: "#benefits",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

export default function Navbar() {
  return (
    <nav className="absolute z-20 top-0 w-full flex justify-between py-4 px-12">
      <div className="flex justify-center items-center">
        <Image src="/text-logo.png" alt="text-logo" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center gap-6 text-sm">
        {links.map((link, i) => (
          <a className="cursor-pointer uppercase" key={i} href={`#${link}`}>
            {link}
          </a>
        ))}
      </div>
      <button className="btn btn-primary">Send me a design</button>
    </nav>
  );
}
