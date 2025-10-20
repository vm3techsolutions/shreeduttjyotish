"use client";

import { useState } from "react";
import Image from "next/image";

export default function HoroscopeSection() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Self-Discovery",
      desc: "Understand your strengths, weaknesses, and inner motivations through your birth chart.",
    },
    {
      title: "Right Timing",
      desc: "Make better life decisions by knowing the most favorable periods for your goals and actions.",
    },
    {
      title: "Relationship Compatibility",
      desc: "Explore harmony and potential challenges between partners using Vedic astrological principles.",
    },
    {
      title: "Career Guidance",
      desc: "Discover which career paths align best with your natural talents and planetary influences.",
    },
    {
      title: "Remedies & Balance",
      desc: "Learn powerful Vedic remedies (like mantras, gemstones, or donations) to overcome challenges.",
    },
  ];

  return (
    <section className="flex flex-col items-center text-left px-6 py-12  mx-auto">
      {/* Title + Description */}
      <h1 className="title ">
        Horoscope Reading
      </h1>
      <h2 className="subtitle ">
        Unlocking Your Destiny: How Horoscope Reading Guides Your Life’s Journey
      </h2>

      {/* Full Width Image */}
      <div className="w-full mb-10">
        <Image
          src="/assets/blog/Horoscope.png"
          alt="Horoscope Reading"
          width={1920}
          height={600}
          className="w-full h-[300px] md:h-[450px] object-cover rounded-lg"
        />
      </div>

      {/* Content Paragraphs */}
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          For thousands of years, astrology—known in India as Jyotish Shastra—has been a guiding light for those seeking clarity and direction. Derived from Sanskrit, “Jyotish” means the science of light, symbolizing how the positions of celestial bodies shed light on the path of human life.
        </p>
        <p>
          Horoscope reading is not just about predicting the future—it’s about understanding your true nature, life purpose, and karmic patterns that influence your experiences.
        </p>
        <p>
          For thousands of years, astrology—known in India as Jyotish Shastra—has been a guiding light for those seeking clarity and direction. Derived from Sanskrit, “Jyotish” means the science of light, symbolizing how the positions of celestial bodies shed light on the path of human life.
        </p>
        <p>
          Horoscope reading is not just about predicting the future—it’s about understanding your true nature, life purpose, and karmic patterns that influence your experiences.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10 mb-8">
        <h3 className="text-2xl font-semibold text-[#D4A73F] mb-6 text-left">
          Why is Horoscope Reading?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className={`cursor-pointer border rounded-xl p-6 shadow-sm transition-all duration-300 
              hover:shadow-md ${
                activeCard === index
                  ? "border-[#457f3e] scale-[1.05] bg-[#f7fdf7]"
                  : "border-gray-200 scale-[1]"
              }`}
            >
              <h4 className="text-lg font-semibold text-center text-[#2E7D32] mb-2">
                {card.title}
              </h4>
              {activeCard === index && (
                <p className=" mt-2 animate-fadeIn">
                  {card.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Role of Vedic Astrologer */}
      <div className="mb-8 mt-4">
        <h3 className="text-2xl font-semibold text-[#D4A73F] mb-4">
          The Role of a Vedic Astrologer
        </h3>
        <p className="text-gray-700 leading-relaxed">
          A skilled Jyotish not only reads your chart but also helps you align with cosmic energies. They interpret planetary influences compassionately and guide you toward harmony, balance, and success. Horoscope reading becomes a journey of self-awareness and transformation, not mere prediction.
        </p>
      </div>

      {/* Conclusion */}
      <div className="mb-8 mt-4">
        <h3 className="text-2xl font-semibold text-[#D4A73F] mb-4">
          Conclusion: Your Horoscope, Your Life Map
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your horoscope is a sacred mirror of your destiny—revealing both opportunities and challenges. With the guidance of Vedic astrology, you can navigate life’s journey with awareness, confidence, and spiritual insight. Remember, the stars don’t control you—they guide you. The real power lies in understanding and harmonizing with their energy.
        </p>
      </div>
    </section>
  );
}
