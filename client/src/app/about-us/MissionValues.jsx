import React from 'react'

export default function MissionValues() {
     const cards = [
    {
      title: "Guidance With Integrity",
      desc: "Every consultation is honest, insightful, and authentic.",
    },
    {
      title: "Solutions Rooted In Positivity",
      desc: "Remedies focus on harmony, not fear.",
    },
    {
      title: "Absolute Confidentiality",
      desc: "Your personal information remains private.",
    },
    {
      title: "Empowerment Through Awareness",
      desc: "The goal is not dependency but direction.",
    },
  ];
  return (
     <section className="flex flex-col items-center text-center px-6 py-12">
      {/* Header */}
      <h1 className="title">Mission & Values</h1>
      <h2 className="subtitle">My Philosophy — Guided By Integrity & Light</h2>
      <p className="description ">
       Astrology is a sacred science — and I treat it with the respect it deserves. My work is built on principles that ensure every client experiences clarity, hope, and empowerment.
</p>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl "> 
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-[#00000026] hover:border-[#B71C1C] drop-shadow-amber-600 rounded-lg p-6 bg-white text-left hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-[#B71C1C] font-semibold text-2xl mb-2 text-center">
              {card.title}
            </h3>
            <hr className="border-1 border-[#D4AF37] mb-3 w-full mx-auto" />
            <p className="text-[#4C4C4C] text-sm leading-relaxed text-center">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      </section>
  )
}
