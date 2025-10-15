"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = [
  "/assets/home/0.png",
  "/assets/home/1.png",
  "/assets/home/2.png",
  "/assets/home/3.png",
  "/assets/home/4.png",
  "/assets/home/5.png",
  "/assets/home/6.png",
];

const buttons = [
  { name: "Horoscope Reading", path: "/services/horoscope-reading" },
  { name: "Vastushastra", path: "/services/vastushastra" },
  { name: "Numerology", path: "/services/numerology" },
  { name: "Real Estate Consultation", path: "/services/real-estate-consultation" },
  { name: "Religious Guidance", path: "/services/religious-guidance" },
  { name: "Dowsing", path: "/services/dowsing" },
  { name: "Customised Suggestions", path: "/services/customised-suggestions" },
];

export default function Photo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      <h1 className="title">Services</h1>
      <h2 className="subtitle"  style={{ fontFamily: "'EB Garamond'" }}>
        WITH PRECISE READINGS, GET CLARITY ABOUT HEALTH, RELATIONSHIPS, CAREER, AND FINANCES.
      </h2>
      <p className="description">
        Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.
      </p>

      {/* Photos Grid - First Row */}
      <div className="grid sm:grid-cols-4 sm:gap-20 gap-10 mb-20 mt-3">
        {photos.slice(0, 4).map((src, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-delay={index * 150} // ⬅ stagger
            className="flex flex-col items-center"
          >
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
              <button className="mt-2 px-4 py-1 w-52 md:w-56 lg:w-60 hover:bg-[#2E7D32] transition button">
                {buttons[index].name}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Photos Grid - Second Row */}
      <div className="grid sm:grid-cols-3 sm:gap-20 gap-10">
        {photos.slice(4, 7).map((src, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-delay={(index + 4) * 150} // stagger continues
            className="flex flex-col items-center"
          >
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
              <button className="mt-2 px-4 py-2 w-52 md:w-56 lg:w-60  hover:bg-[#2E7D32] transition button">
                {buttons[index + 4].name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
