"use client";

import Image from "next/image";

export default function TestimonialSlider() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-12">
      <h1 className="title">Contact Us</h1>
      <h2
        className="text-xl md:text-3xl font-semibold text-[#2E7D32] mb-8"
        style={{ fontFamily: "EB Garamond" }}
      >
        Begin your journey with us today.
      </h2>

      {/* Two-column section */}
      <div className="flex flex-col lg:flex-row items-center bg-[#D4A73F26] sm:rounded-[90px] w-full gap-10 sm:gap-0">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 sm:rounded-tl-[90px] sm:rounded-bl-[90px]">
          <Image
            src="/assets/home/ContactUs.png" // replace with your image path
            alt="Contact Us"
            width={600}
            height={400}
            className=" h-[80vh] w-full sm:rounded-tl-[90px] sm:rounded-bl-[90px]"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2  sm:px-10 px-4 py-4 sm:py-0"><h2
        className="text-xl md:text-3xl font-semibold text-[#2E7D32] mb-8"
        style={{ fontFamily: "EB Garamond" }}
      >
        Get Your Quote Today!
      </h2>
          <form className="flex flex-col gap-4">
            
            {/* Row 1: Name, Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Row 2: Phone, DOB */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Row 3: Birth Time, Birth Place */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="time"
                placeholder="Birth Time"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Birth Place"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Row 4: Address */}
            <div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Row 5: Upload Documents */}
            <div>
              <input
                type="file"
                className="w-full border border-[#D4A73F] bg-white rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className=" transition button mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
