"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { EB_Garamond } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import font for "Get Your Quote Today!"
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    birthTime: "",
    birthPlace: "",
    address: "",
    documents: null,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className="flex flex-col items-center text-left px-6 py-12 mx-auto">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <div>
          <p className="title text-lg tracking-wide">Contact Us</p>

          <h2 className="text-[#A61919] text-2xl md:text-3xl font-bold mb-4">
            Connect with the Light of Guidance
          </h2>

          <p className="mb-3 leading-relaxed">
            Have questions about your horoscope, personalized consultation, or astrology services?
          </p>
          <p className="mb-10 leading-relaxed">
            We’re here to help you find clarity, direction, and peace through the wisdom of Jyotish Shastra.
          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div
                className="border hover:border-[#B71C1C] rounded-lg p-5 flex flex-col items-center text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Phone className="text-[#C19A38] mb-2" size={22} />
                <span className="text-[#2E7D32] font-semibold text-xl">
                  +91-8308837371
                </span>
              </div>
              <div
                className="border hover:border-[#B71C1C] rounded-lg p-5 flex flex-col items-center text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Phone className="text-[#C19A38] mb-2" size={22} />
                <span className="text-[#2E7D32] font-semibold text-xl">
                  020-66663698
                </span>
              </div>
            </div>

            <div
              className="border hover:border-[#B71C1C] rounded-lg p-5 flex flex-col items-center text-center shadow-sm mt-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Mail className="text-[#C19A38] mb-2" size={22} />
              <span className="text-[#2E7D32] font-semibold text-xl">
                contact@shreeduttjyotish.com
              </span>
            </div>

            <div
              className="border hover:border-[#B71C1C] rounded-lg p-5 flex flex-col items-center text-center shadow-sm mt-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <MapPin className="text-[#C19A38] mb-2" size={22} />
              <span className="text-[#2E7D32] font-semibold text-xl leading-snug">
                Office No. 122, 1st Floor, Above Dorabjee Mart, Amanora Apex,
                Amanora Park Town,<br />
                Hadapsar, Pune, Maharashtra, 411028
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="border hover:border-[#B71C1C] rounded-lg shadow-sm p-6 bg-white mt-6 lg:mt-16">
          <h3
            className={`text-[#2E7D32] text-2xl font-bold text-center mb-6 ${garamond.className}`}
          >
            Get Your Quote Today!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-md text-black mb-1">Name :</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-md text-black mb-1">Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-md text-black mb-1">Phone :</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-md text-black mb-1">Birth Date :</label>
                <input
                  type="date"
                  name="dob"
                  placeholder="DD/MM/YYYY"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-md text-black mb-1">Birth Time :</label>
                <input
                  type="time"
                  name="birthTime"
                  placeholder="HH:MM"
                  value={formData.birthTime}
                  onChange={handleChange}
                  className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-md text-black mb-1">Birth Place :</label>
                <input
                  type="text"
                  name="birthPlace"
                  placeholder="Pune, India"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-md text-black mb-1">Address :</label>
              <textarea
                name="address"
                placeholder="123 Street, City, State"
                value={formData.address}
                onChange={handleChange}
                className="border hover:border-[#B71C1C] rounded-md p-2 w-full h-20 focus:outline-[#A61919]"
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label className="text-md text-black mb-1">Upload Documents (If Any) :</label>
              <input
                type="file"
                name="documents"
                placeholder="Choose a file"
                onChange={handleChange}
                className="border hover:border-[#B71C1C] rounded-md p-2 w-full focus:outline-[#A61919]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 hover:bg-[#2E7D32] transition button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
