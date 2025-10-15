"use client"
import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section
      className="relative   h-[220px] md:h-[400px] sm:h-[254px] lg:h-[500px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/about/AboutBanner.png') " }}
    >
      {/* Overlay */}
      <div className="absolute "></div>

      {/* Content */}
     <div className="section relative z-10 px-4 sm:px-2 md:px-6 text-center ml-4 sm:pr-[700px]">
  <h1 className=" text-white pb-6 sm:pb-4  font-bold text-left  sm:text-[40px] sm:leading-[55px]" style={{ fontFamily: 'EB Garamond'}}>
   Guiding Lives Through <br/>The Cosmic Path <br/>Of Wisdom & Balanc
    <br className="hidden sm:block" />
  </h1>

  <Link href="/solutions">
    <button className="buttonGreenBG sm:mt-2 sm:-ml-16  shadow-2xl hover:shadow-[#B71C1C]">
      Book a Consultation
    </button>
  </Link>
</div>

    </section>
  );
}
