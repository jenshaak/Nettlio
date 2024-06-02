import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = ["pricing", "benefits", "services", "contact"];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between py-3 px-6">
      <div className="flex justify-center items-center">
        <Image src="/text-logo.png" alt="text-logo" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center gap-6 text-sm">
        {links.map((link, i) => (
          <a key={i} href={`#${link}`}>
            {link.toUpperCase()}
          </a>
        ))}
      </div>
      <button className="btn btn-primary">Send me a design</button>
    </nav>
  );
}
