import Image from "next/image";
import React from "react";
import heroImage from "../public/heroImage.jpg";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center h-screen">
      <Image
        src={heroImage}
        alt="hero-image"
        className="object-cover h-full w-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent/50 to-transparent/80">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-4xl">
            Affordable, beautiful websites - in no time
          </h1>
          <p>You let us handle the work</p>
          <button className="btn btn-primary w-max btn-lg">Contact us</button>
        </div>
      </div>
    </section>
  );
}
