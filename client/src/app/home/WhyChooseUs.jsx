"use client";

import Image from "next/image";
import React from "react";

export default function Photo() {
  const cards = [
    {
      img: "/assets/home/WCU1.png",
      title: "20+ YEARS EXPERIENCE ",
      desc: "Trusted guidance in astrology, vastu, & numerology with a proven track record.",
    },
    {
      img: "/assets/home/WCU2.png",
      title: " HOLISTIC APPROACH",
      desc: "A unique blend of astrology, vastu, and numerology that provides complete solutions.",
    },
    {
      img: "/assets/home/WCU3.png",
      title: " DEDICATED SUPPORT",
      desc: "Personalized attention, detailed reports, and continuous support to help.",
    },
    {
      img: "/assets/home/WCU4.png",
      title: "CONFIDENTIALITY ",
      desc: "Every consultation is handled with the confidentiality and ethical practices.",
    },
  ];

  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      <h1 className="title">Why Choose Us</h1>
      <h2 className="subtitle">ASTROLOGY WITH ACCURACY & INTEGRITY</h2>
      <p className="description">
        Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.
      </p>

      {/* GIF + Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-3 w-full ">
        {/* Left Side - GIF */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <Image
            src="/assets/home/Services.png" // 🔹 Replace with your GIF path
            alt="Astrology GIF"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Cards */}
       <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
  {cards.map((card, index) => (
    <div
      key={index}
      className="group border border-[#D4AF37] rounded-[5px] py-5 px-2 text-left  hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-center mb-4 overflow-hidden p-1">
        <Image
          src={card.img}
          alt={card.title}
          width={60}
          height={60}
          className="object-contain transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#B71C1C] mb-2 text-center">
        {card.title}
      </h3>
      <p className="text-sm text-[#4C4C4C] text-center">{card.desc}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
