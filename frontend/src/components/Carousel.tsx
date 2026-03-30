"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/finance1.jpg", // replace with your images
    title: "Video-First Learning",
    subtitle: "Bite-sized videos, big insights.",
  },
  {
    id: 2,
    image: "/images/finance2.jpg",
    title: "Case Studies That Matter",
    subtitle: "Learn from real businesses & models.",
  },
  {
    id: 3,
    image: "/images/finance3.jpg",
    title: "Courses Coming Soon",
    subtitle: "Structured learning paths with projects.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[70vh] overflow-hidden rounded-2xl shadow-lg mt-6">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === current}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/70 via-indigo-700/70 to-purple-700/70"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              {slide.title}
            </h2>
            <p className="mt-3 text-lg text-white/90">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </section>
  );
}
