"use client";

import React from "react";
import Image from "next/image";


export default function CaseStudy() {
   const members = [
    { name: "Madhuri Tikhe", img: "/assets/home/Services.png" },
    { name: "Prayag Tikhe", img: "/assets/home/Services.png" },
    { name: "Ashwini Tikhe", img: "/assets/home/Services.png" },
  ];
  return (
    <section className="flex flex-col items-center text-center px-6 py-12 mt-6">
      {/* Header */}
      <h1 className="title">The Journey</h1>
      <h2 className="subtitle">A Lifelong Connection with the Stars</h2>
      <p className="description ">
       Since childhood, I felt a deep fascination for the celestial patterns and the unseen energies that shape our lives. What began as curiosity 
soon evolved into a lifelong calling — to help people align their actions with the universe’s rhythm. Over the years, I immersed myself 
in the study of Vedic Astrology, Vastu Shastra, and Numerology, learning from masters and sacred texts.”“Today, my purpose is simple — to translate these cosmic insights into practical, positive, and transformative guidance for individuals, 
families, and businesses worldwide. </p>


 {/* Members Section */}
     <div className="mt-3 flex flex-col sm:flex-row justify-center items-center sm:gap-24 gap-10">
  {members.map((person, index) => (
    <div key={index} className="flex flex-col items-center group">
      {/* Image Box */}
      <div className="w-68 h-68 bg-gray-200 rounded-md overflow-hidden">
        <Image
          src={person.img}
          alt={person.name}
          width={192}
          height={192}
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <p className="mt-3 text-[#2E7D32] font-semibold text-2xl">
        {person.name}
      </p>
    </div>
  ))}
</div>

     
    </section>
  );
}
