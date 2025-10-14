"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Auto-slide interval in milliseconds
const SLIDE_INTERVAL = 3000;

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // default
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  // --- Fetch Testimonials ---
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/data/home/Testimonial.json');
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // --- Responsive Cards ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // initial
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = testimonials.length;
  const maxIndex = totalCards - cardsPerView;

  // --- Auto-Slide ---
  useEffect(() => {
    if (totalCards <= cardsPerView) return; // don't slide if not enough cards

    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : 0));
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [maxIndex, totalCards, cardsPerView]);

  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      <h1 className="title">Testimonials</h1>
      <h2 className="text-xl md:text-3xl font-semibold text-[#2E7D32] mb-4" style={{ fontFamily: 'EB Garamond'}}>See how lives transformed with us.</h2>

      <div className="w-full  mx-auto ">
        {loading ? (
          <p className="text-center text-gray-500">Loading testimonials...</p>
        ) : (
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className={`flex transition-transform duration-700 ease-in-out ${totalCards <= cardsPerView ? 'justify-center' : ''}`}
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * 20}px))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 p-3"
                  style={{ width: `calc(100% / ${cardsPerView})` }}
                >
                  <div className="relative flex items-center justify-between pt-6 pb-2 px-6 h-full border-2 border-[#D4A73F] rounded-tr-[150px] rounded-br-[150px] shadow-lg mt-3  text-[#2E7D32]">
                    
                    <div 
                      className="absolute top-[-28px] left-[15px] text-primary-green text-[6rem] leading-none z-10 bg-white pr- rounded-tl-[1rem] font-serif"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      &ldquo;
                    </div>
                    
                    <div className="flex flex-col justify-center flex-grow pr-4 mt-4">
                      <p className="text-[#000000] text-base italic leading-relaxed mb-4">
                        {testimonial.quote}
                      </p>
                      <p className="text-sm font-semibold text-[#000000]">
                        -{testimonial.name}
                      </p>
                    </div>
                    
                   <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden  relative">
  <Image 
    src={testimonial.image} 
    alt={testimonial.name} 
    fill
    sizes="(max-width: 768px) 7rem, 8rem" // responsive sizes matching w-28/md:w-32
    style={{ objectFit: 'cover', borderRadius: '9999px' }} // cover + round
  />
</div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSlider;
