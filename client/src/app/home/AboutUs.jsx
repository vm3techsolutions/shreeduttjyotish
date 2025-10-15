"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LeftImageSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-12 mt-6">
      {/* Left Image */}
      <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0">
        <Image
          src="/assets/home/AboutUs.png" // 🔹 replace with your image path
          alt="About Image"
          width={500}
          height={400}
          className="rounded-tr-[150px] shadow-lg object-cover"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full md:w-3/5 md:pl-8 text-center md:text-left sm:ml-10">
        <h4 className="title">
          About Us
        </h4>
        <h2 className="text-xl md:text-3xl font-semibold  text-[#B71C1C] mb-4"  style={{ fontFamily: 'EB Garamond'}}>
         We bring balance through Jyotish and Vastu.
        </h2>
        <p className="text-[#000] mb-6 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        <p className="text-[#000] mb-6 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <Link href="/about">
          <button className="px-4 py-2 hover:bg-[#2E7D32] transition button">
           Know More
          </button>
        </Link>
      </div>
    </section>
  );
}
