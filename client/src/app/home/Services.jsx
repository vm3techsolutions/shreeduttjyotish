"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const photos = [
  "/assets/home/Services.png",
  "/assets/home/Services.png",
  "/assets/home/Services.png",
  "/assets/home/Services.png",
  "/assets/home/Services.png",
  "/assets/home/Services.png",
  "/assets/home/Services.png",
];

// Array for buttons (one button per image)
const buttons = [
  { name: "Horoscope Reading", path: "/server/" },
  { name: "Vastushastra", path: "/server/" },
  { name: "Numerology", path: "/server/" },
  { name: "Real Estate Consultation", path: "/server/" },
  { name: "Religious Guidance", path: "/server/" },
  { name: "Dowsing", path: "/server/" },
  { name: "Customised Suggestions", path: "/server/" },
];

export default function Photo() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      <h1 className="title">Services</h1>
      <h2 className="subtitle">WITH PRECISE READINGS, GET CLARITY ABOUT HEALTH, RELATIONSHIPS, CAREER, AND FINANCES.</h2>
      <p className="description">
       Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.
      </p>

      {/* Photos Grid */}
      <div className="grid sm:grid-cols-4 sm:gap-20 gap-10 mb-20 mt-3">
  {photos.slice(0, 4).map((src, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-54 h-54 mb-2 group">
        <Image
          src={src}
          alt={`Photo ${index + 1}`}
          width={96}
          height={96}
          className="
            rounded-full 
            object-cover 
            h-54 w-54 
            transform 
            transition-transform 
            duration-700 
            ease-in-out 
            group-hover:rotate-[360deg]
          "
        />
      </div>
      <Link href={buttons[index].path}>
        <button className="mt-2 px-4 py-1 w-54 hover:bg-[#2E7D32] transition button">
          {buttons[index].name}
        </button>
      </Link>
    </div>
  ))}
</div>


     <div className="grid sm:grid-cols-3 sm:gap-20 gap-10">
  {photos.slice(4, 7).map((src, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-54 h-54 mb-2 rounded-full group">
        <Image
          src={src}
          alt={`Photo ${index + 5}`}
          width={96}
          height={96}
          className="
            rounded-full 
            object-cover 
            h-54 w-54 
            transform 
            transition-transform 
            duration-700 
            ease-in-out 
            group-hover:rotate-[360deg]
          "
        />
      </div>
      <Link href={buttons[index + 4].path}>
        <button className="mt-2 px-4 py-2 w-54 hover:bg-[#2E7D32] transition button">
          {buttons[index + 4].name}
        </button>
      </Link>
    </div>
  ))}
</div>

    </section>
  );
}
