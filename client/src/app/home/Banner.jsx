"use client"
import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section
      className="sm:-mt-10 -mt-4   h-[200px] md:h-[400px] sm:h-[254px] lg:h-[580px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/home/HomeBanner1.jpg') " }}
    >
      {/* Overlay */}
      <div className="absolute "></div>

      {/* Content */}
     <div className="section relative z-10 px-4 sm:px-2 md:px-6 text-center">
  <h1 className="heading text-white pb-6 sm:pb-4" style={{ fontFamily: 'EB Garamond'}}>
    Where Ancient Wisdom Meets Modern Living.
    <br className="hidden sm:block" />
  </h1>

  <Link href="/solutions">
    <button className="buttonGreenBG sm:mt-2 sm:-ml-0 -ml-8 shadow-2xl hover:shadow-[#B71C1C]">
      Explore Our Services
    </button>
  </Link>
</div>

    </section>
  );
}
