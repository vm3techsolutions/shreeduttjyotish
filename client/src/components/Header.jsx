"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // ✅ Auto-close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setIsLangOpen(false);
  }, [pathname]);

  const links = [
    { href: "/about-us", label: "About Us" },
    {
      href: "#",
      label: "Services",
      submenu: [
        { href: "/services/horoscope-reading", label: "Horoscope Reading" },
        { href: "/services/vastushastra", label: "Vastushastra" },
        { href: "/services/numerology", label: "Numerology" },
        { href: "/services/real-estate-consultation", label: "Real Estate Consultation" },
        { href: "/services/religious-guidance", label: "Religious Guidance" },
        { href: "/services/dowsing", label: "Dowsing" },
        { href: "/services/customised-suggestions", label: "Customised Suggestions" },
      ],
    },
    { href: "/case-study", label: "Case Study" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full shadow-md bg-white flex items-center justify-between relative lg:pl-[80px] lg:pr-[40px]">
      {/* Left: Logo */}
      <Link href="/">
        <Image
          src="/assets/header/HeaderLogo.png"
          alt="Logo"
          width={150}
          height={38}
          className="cursor-pointer h-16 w-16"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 content ml-20">
        {links.map((link) => (
          <div key={link.href} className="relative group content">
            <Link
              href={link.href}
              className={`content nav-link flex items-center gap-[3px] ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.label}
              {link.submenu && (
                <ChevronDown
                  size={24}
                  className="pt-1 transition-transform duration-300 group-hover:rotate-180"
                />
              )}
            </Link>

            {/* Submenu for desktop */}
            {link.submenu && (
              <ul className="absolute left-0 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-[12px]">
                {link.submenu.map((sublink) => (
                  <li key={sublink.href}>
                    <Link
                      href={sublink.href}
                      className="block text-[#000] hover:bg-[#2E7D32] hover:text-[#ffffff] py-[10px] px-[10px] text-[16px] font-medium"
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop Right Buttons */}
      <div className="hidden md:flex items-center gap-4 relative">
        <Link href="/contact">
          <button className="px-4 py-2 hover:bg-[#2E7D32] transition button">
            Book Consultation
          </button>
        </Link>

        {/* Language Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 border border-[#B71C1C] rounded-[5px] px-4 py-2 text-black font-semibold hover:bg-[#B71C1C] hover:text-white transition-all duration-300 ">
            English
            <ChevronDown size={18} />
          </button>

          <ul className="absolute right-0 top-full mt-2 w-28 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 rounded-[5px]">
            <li>
              <button className="block w-full text-left px-4 py-1.5 text-[#000] hover:bg-[#B71C1C] hover:text-white text-[16px]">
                English
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-1.5 text-[#000] hover:bg-[#B71C1C] hover:text-white text-[16px]">
                Hindi
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-1.5 text-[#000] hover:bg-[#B71C1C] hover:text-white text-[16px]">
                Marathi
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ✅ Mobile Drawer */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start py-6 space-y-2 md:hidden z-50 transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-10 opacity-0 invisible"
        }`}
      >
        {links.map((link) => (
          <div key={link.href} className="w-full content">
            <div
              className="flex justify-between items-center px-6 py-1 w-full cursor-pointer"
              onClick={() =>
                link.submenu
                  ? setOpenSubmenu(openSubmenu === link.label ? null : link.label)
                  : setIsOpen(false)
              }
            >
              <Link
                href={link.href}
                className={`text-gray-700 font-medium ${
                  pathname.startsWith(link.href) ? "font-bold text-[#2E7D32]" : ""
                }`}
              >
                {link.label}
              </Link>
              {link.submenu &&
                (openSubmenu === link.label ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                ))}
            </div>

            {link.submenu && openSubmenu === link.label && (
              <div className="pl-10">
                {link.submenu.map((sublink) => (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    className="block px-4 py-2 content"
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Mobile Buttons */}
        <div className="w-full px-6 flex flex-col gap-3 mt-4 relative">
          <Link href="/contact" className="w-full">
            <button className="px-4 py-2 w-full button">Book Consultation</button>
          </Link>

          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center justify-center gap-2 border border-[#B71C1C] rounded-full px-4 py-2 text-black font-semibold hover:bg-[#B71C1C] hover:text-white transition-all duration-300"
          >
            English
            {isLangOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {isLangOpen && (
            <ul className="mt-2 w-full bg-white shadow-lg rounded-[10px] overflow-hidden z-50">
              <li>
                <button className="block w-full text-left px-4 py-2 text-[#000] hover:bg-[#B71C1C] hover:text-white text-[16px]">
                  English
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-[#000] hover:bg-[#B71C1C] hover:text-white text-[16px]">
                  Hindi
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-[#000] hover:bg-[#B71C1C] hover:text-white text-[16px]">
                  Marathi
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
