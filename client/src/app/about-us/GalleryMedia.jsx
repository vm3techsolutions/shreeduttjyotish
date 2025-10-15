import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryMedia() {
  const images = [
    "/assets/home/Services.png",
    "/assets/home/Services.png",
    "/assets/home/Services.png",
    "/assets/home/Services.png",
    "/assets/home/Services.png",
  ];

  return (
    <section className="flex flex-col items-center text-center px-6 py-12 ">
      {/* Header */}
      <h1 className="text-[#D4A73F] font-semibold text-lg mb-2 tracking-wide">
        Gallery / Media
      </h1>
      <h2
        className="text-[#B71C1C] font-[600] text-2xl md:text-3xl mb-6"
        style={{ fontFamily: "EB Garamond, serif" }}
      >
     In The Spotlight
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-64 transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

       <h2 className="text-xl md:text-3xl font-semibold  text-[#2E7D32] mb-4 sm:mt-16 sm:px-20 mt-10" >
         “Every challenge carries a cosmic message. With awareness and guidance, 
you can turn it into opportunity.”
        </h2>

         <Link href="/contact">
          <button className="px-4 py-2 hover:bg-[#2E7D32] transition button mt-6">
           Schedule a Consultation Now!
          </button>
        </Link>
    </section>
  );
}
