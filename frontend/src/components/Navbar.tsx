"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with proper routes
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black duration-300">
      <nav
        className={`flex justify-between items-center px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        {/* Logo with animation */}
        <a
          href="/"
          className="text-2xl font-bold group relative overflow-hidden"
        >
          <span className="inline-block transition-transform duration-300 group-hover:scale-110">
            <span className="text-yellow-300 drop-shadow-lg">Fin</span>
            <span className="text-white drop-shadow-lg">Dev</span>
          </span>
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300/20 to-purple-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </a>

        {/* Links with enhanced animations and proper navigation */}
        <ul className="flex gap-8 font-medium">
          {navItems.map((item, index) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className="relative text-white/90 hover:text-yellow-300 transition-all duration-300 group py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-300 to-pink-300 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 to-purple-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
