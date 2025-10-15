"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "PROBLEM STATEMENT",
    desc: "Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.",
    buttons: [
      { name: " PROBLEM", path: "/horoscope" },
      { name: " SOLUTION", path: "/consult" },
      { name: "SUCCESS ", path: "/reports" },
    ],
  },
  {
    title: "Palmistry Analysis",
    desc: "Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.",
    buttons: [
      { name: "Explore", path: "/palmistry" },
      { name: "Book Session", path: "/session" },
      { name: "See Details", path: "/details" },
    ],
  },
  {
    title: "Vastu Consultation",
    desc: "Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.",
    buttons: [
      { name: "Get Started", path: "/vastu" },
      { name: "Meet Expert", path: "/expert" },
      { name: "More Info", path: "/info" },
    ],
  },
  {
    title: "Numerology Insights",
    desc: "Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups. Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.",
    buttons: [
      { name: "Learn More", path: "/numerology" },
      { name: "Analyze", path: "/analyze" },
      { name: "Book Now", path: "/book" },
    ],
  },
];

export default function CaseStudy() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      {/* Header */}
      <h1 className="title">Case Study</h1>
      <h2 className="subtitle">ASTROLOGY WITH ACCURACY & INTEGRITY</h2>
      <p className="description ">
        Learn How to Quickly Generate Placeholder Text Using a Lorem Ipsum Tool. Explore How Lorem Ipsum Generators Can Liven up Your Web Layout Wireframes and Mockups.
      </p>

      {/* Testimonial Slider */}
      <div className="w-full border border-[#D4AF37] hover:border-[#B71C1C] rounded-[10px] p-6 bg-white relative mt-3">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <h3 className="text-3xl font-semibold mb-3 text-[#2E7D32]">{slide.title}</h3>
                <p className="mb-4 text-[#4C4C4C]">{slide.desc}</p>
                <div className="flex justify-center flex-wrap gap-3">
                  {slide.buttons.map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.path}
                      className="mt-3 px-4 py-2 w-54  transition button1"
                    >
                      {btn.name}
                    </a>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    
      </div>
    </section>
  );
}
