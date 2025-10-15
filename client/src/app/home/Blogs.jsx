"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/data/home/Blogs.json"); // path to your JSON
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();

    // Initialize AOS
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="flex flex-col items-center text-center px-6 py-12 bg-[#D9D9D9]/12">
      <h1 className="title">Recent Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6 sm:px-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            data-aos="fade-down" // ⬅ Animation from top
            data-aos-delay={index * 150} // ⬅ Stagger effect
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-[#fff] hover:border-[#B71C1C]/30 transition-all duration-300"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-left text-[#B71C1C]">
                {blog.title}
              </h3>
              <hr className="border-t-2 border-[#D4AF37] w-full mb-3" />
              <p className="text-[#4C4C4C] mb-4 flex-1 text-left">{blog.desc}</p>
              <a
                href={blog.link}
                className="w-32 transition button"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <a
        href="/blogs"
        className="mt-10 button1"
      >
        Explore More
      </a>
    </section>
  );
}
