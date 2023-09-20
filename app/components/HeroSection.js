"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-spans-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I am Hong
          </h1>
          <p className="text-grey text-lg lg:text-xl ">
            lorem ipsum dolor sit am
          </p>
        </div>

        <div className="col-span-5">
          <p className="text-white">Test</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
