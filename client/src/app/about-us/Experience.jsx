"use client";

import React from "react";



export default function CaseStudy() {
   const data = [
    { text: "20+ Years Of Expertise" },
    { text: <>200+ Clients <br /> Served</> },
    { text: "Featured In Reputed platforms" },
  ];
  return (
    <section className="flex flex-col items-center text-center px- py-12 ">
      {/* Header */}
      <h1 className="title">Experience & Achievements</h1>
      <h2 className="subtitle">Experience That Speaks Through Results</h2>
     

 {/* Yellow Box */}
      <div className="bg-[#D4AF37] w-full py-14 flex flex-col sm:flex-row justify-center items-center sm:gap-40 gap-14 rounded-none mt-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-64 h-64 bg-white rounded-full border-2 border-[#2E7D32] hover:border-[#B71C1C] text-[#2E7D32] font-semibold text-center px-4 leading-snug text-2xl"
          >
            {item.text}
          </div>
        ))}
      </div>

     
    </section>
  );
}

