import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="flex flex-col bg-[#2E7D32] mt-10">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6 lg:px-20 mt-10 mb-4">
        
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <Image
              src="/assets/header/FooterLogo.png"
              alt="PPS Energy Logo"
              width={150}
              height={35}
              className="cursor-pointer  rounded-md"
            />
          </Link>
          <p className="text-[#ffffff] text-[15px] leading-relaxed">
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col sm:ml-8">
          <h3 className="text-[#D4AF37] text-lg font-semibold">Quick Links</h3>
          <ul className="list-none text-white text-base space-y-4 mt-4">
            <li><Link href="/about-us" className="hover:text-[#B71C1C]">About Us</Link></li>
            <li><Link href="/insights" className="hover:text-[#B71C1C]">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-[#B71C1C]">Case Study</Link></li>
            <li><Link href="/career" className="hover:text-[#B71C1C]">Blog</Link></li>
            <li><Link href="/contact-us" className="hover:text-[#B71C1C]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <h3 className="text-[#D4AF37] text-lg font-semibold">Other Links</h3>
          <ul className="list-none text-white text-base space-y-4 mt-4">
            <li><Link href="/privacy-policy" className="hover:text-[#B71C1C]">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-[#B71C1C]">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col justify-between -ml-4">
          <div className="text-[#ffffff] mb-6">
            <h3 className="text-[#D4AF37] text-lg font-semibold">Get In Touch</h3>

            <div className="mt-4 mb-3">
              <p>Address: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="mb-3">
              <p>
                Phone: &nbsp;
                <Link href="tel:+911234512345" className="hover:text-[#B71C1C]">
                   +91 12345 12345
                </Link>
              </p>
            </div>

            <div className="mb-3">
              <p>
                Email: &nbsp;
                <Link href="mailto:salesppsenergy@gmail.com" className="hover:text-[#B71C1C]">
                   salesppsenergy@gmail.com
                </Link>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 text-[#000000] text-2xl mb-[30px]">
            <div className="border border-gray-300 rounded-[5px] p-1.5 group">
              <Link href="#" aria-label="Facebook">
                <FaFacebookF className="text-[#B71C1C] rounded-full bg-[#ffffff] p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </Link>
            </div>

            <div className="border border-gray-300 rounded-[5px] p-1.5 group">
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="text-[#B71C1C] rounded-full bg-[#ffffff] p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </Link>
            </div>

            <div className="border border-gray-300 rounded-[5px] p-1.5 group">
              <Link href="#" aria-label="YouTube">
                <FaYoutube className="text-[#B71C1C] rounded-full bg-[#ffffff] p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </Link>
            </div>

            <div className="border border-gray-300 rounded-[5px] p-1.5 group">
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="text-[#B71C1C] rounded-full bg-[#ffffff] p-1 transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-[#ffffff] bg-[#B71C1C] py-3 text-[15px]">
        <p>
          Designed & Developed By:{" "}
          <Link
            href="https://vm3techsolution.com/plans/?v=212bd1cfe3fb"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#D4AF37]"
          >
            VM3 Tech Solutions LLP
          </Link>
        </p>
      </div>
    </section>
  );
}
