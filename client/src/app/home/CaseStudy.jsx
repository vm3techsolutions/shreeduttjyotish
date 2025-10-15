"use client";

import React, { useState } from "react";

export default function CaseStudy() {
  // ✅ Step 1: Store all case data
  const slides = {
    problem: {
      title: "PROBLEM STATEMENT",
      desc: "The client faced issues understanding their horoscope accuracy and consistency. They needed a transparent, reliable astrology consultation system with clear data representation and real-time insights.The client faced issues understanding their horoscope accuracy and consistency. They needed a transparent, reliable astrology consultation system with clear data representation and real-time insights.",
    },
    solution: {
      title: "OUR SOLUTION",
      desc: "We built a digital astrology consultation system that integrates horoscope readings, numerology insights, and vastu suggestions with AI-backed accuracy, providing detailed reports and live updates.We built a digital astrology consultation system that integrates horoscope readings, numerology insights, and vastu suggestions with AI-backed accuracy, providing detailed reports and live updates.",
    },
    success: {
      title: "SUCCESS RESULT",
      desc: "Post implementation, client satisfaction increased by 95%. The system improved engagement, trust, and clarity, establishing a strong digital presence in the astrology consultation space.Post implementation, client satisfaction increased by 95%. The system improved engagement, trust, and clarity, establishing a strong digital presence in the astrology consultation space.",
    },
  };

  // ✅ Step 2: Maintain current active data
  const [activeSlide, setActiveSlide] = useState("problem");

  // ✅ Step 3: Button configuration
  const buttons = [
    { name: "PROBLEM", key: "problem" },
    { name: "SOLUTION", key: "solution" },
    { name: "SUCCESS", key: "success" },
  ];

  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      {/* Header */}
      <h1 className="title">Case Study</h1>
      <h2 className="subtitle">ASTROLOGY WITH ACCURACY & INTEGRITY</h2>
      <p className="description">
        Explore how we helped our client transform traditional astrology into a
        transparent and accurate digital experience.
      </p>

      {/* Dynamic Data Card */}
      <div className="w-full border border-[#D4AF37] hover:border-[#B71C1C] rounded-[10px] p-6 bg-white relative mt-3 transition-all duration-300">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-3 text-[#2E7D32] transition-all duration-300">
            {slides[activeSlide].title}
          </h3>
          <p className="mb-4 text-[#4C4C4C] transition-all duration-300">
            {slides[activeSlide].desc}
          </p>

         {/* Buttons */}
<div className="flex justify-center flex-wrap gap-5 sm:gap-10">
  {buttons.map((btn, idx) => (
    <button
      key={idx}
      onClick={() => setActiveSlide(btn.key)}
      className={`mt-3 px-5 py-2 rounded-md border transition-all duration-300
        ${
          activeSlide === btn.key
            ? "bg-[#B71C1C] text-white border-[#B71C1C]"
            : "bg-[#D4AF37] text-white border-[#D4AF37] hover:bg-[#2E7D32] hover:text-white"
        }`}
    >
      {btn.name}
    </button>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
