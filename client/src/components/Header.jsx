"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const links = [
    { href: "/about-us", label: "About Us" },
    {
      href: "#",
      label: "Services",
      submenu: [
        { href: "/services/Service 1", label: "Service 1" },
        { href: "/services/Service 2", label: "Service 2" },
        { href: "/services/Service 3", label: "Service 3" },
        { href: "/services/Service 4", label: "Service 4" },
      ],
    },
    { href: "/case-study", label: "Case Study" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full shadow-md bg-white  flex items-center justify-between relative lg:pl-[80px] lg:pr-[40px]">
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
              className={`content nav-link ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </Link>

            {/* Submenu for desktop */}
            {link.submenu && (
              <ul className="absolute left-0 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
  {/* Book Consultation Button */}
  <Link href="/contact">
    <button className="px-4 py-2 hover:bg-[#2E7D32] transition button">
      Book Consultation
    </button>
  </Link>

  {/* Language Dropdown */}
  <div className="relative group">
    <button
      className="flex items-center gap-2 border border-[#B71C1C] rounded-[5px] px-4 py-2 text-black font-semibold hover:bg-[#B71C1C] hover:text-white transition-all duration-300"
    >
      English
      <ChevronDown size={18} />
    </button>

    {/* Dropdown Menu */}
    <ul className="absolute right-0 top-full mt-2 w-28 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
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

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start py-6 space-y-2 md:hidden z-50">
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

              {/* Mobile submenu */}
              {link.submenu && openSubmenu === link.label && (
                <div className="pl-10">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className="block px-4 py-2 content"
                      onClick={() => setIsOpen(false)}
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
           

            {/* Book Consultation */}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
              <button className="px-4 py-2 w-full button">Book Consultation</button>
            </Link>

             {/* Language Dropdown */}
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
      )}
    </header>
  );
}
