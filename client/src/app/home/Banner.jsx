"use client"
import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section
      className="relative h-[300px] md:h-[400px] sm:h-[254px] lg:h-[400px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/home/HomeBanner.png')" }}
    >
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Content */}
     <div className="section relative z-10 px-4 sm:px-2 md:px-6 text-center">
  <h1 className="heading text-white pb-6 sm:pb-4">
    Where Ancient Wisdom Meets Modern Living.
    <br className="hidden sm:block" />
  </h1>

  <Link href="/solutions">
    <button className="buttonGreenBG mt-2 shadow-2xl hover:shadow-[#B71C1C]">
      Explore Our Services
    </button>
  </Link>
</div>

    </section>
  );
}
