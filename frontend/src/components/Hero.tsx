"use client";

import React, { useState, useEffect } from "react";

// Floating Elements Component
function FloatingElements() {
  const [isClient, setIsClient] = useState(false);

  // Pre-defined positions to avoid hydration mismatch
  const elements = [
    { icon: "$", delay: "0s", duration: "20s", x: "10%", y: "20%" },
    { icon: "₹", delay: "2s", duration: "25s", x: "80%", y: "30%" },
    { icon: "€", delay: "4s", duration: "30s", x: "20%", y: "70%" },
    { icon: "£", delay: "6s", duration: "22s", x: "90%", y: "60%" },
    { icon: "¥", delay: "8s", duration: "28s", x: "15%", y: "45%" },
    { icon: "₿", delay: "10s", duration: "35s", x: "75%", y: "80%" },
  ];

  // Pre-defined particle positions to avoid hydration mismatch
  const particles = [
    { x: "12%", y: "15%", delay: "0s", duration: "4s" },
    { x: "25%", y: "35%", delay: "1s", duration: "5s" },
    { x: "45%", y: "20%", delay: "2s", duration: "3s" },
    { x: "65%", y: "40%", delay: "0.5s", duration: "6s" },
    { x: "85%", y: "25%", delay: "3s", duration: "4s" },
    { x: "35%", y: "60%", delay: "1.5s", duration: "5s" },
    { x: "55%", y: "75%", delay: "2.5s", duration: "3.5s" },
    { x: "75%", y: "65%", delay: "4s", duration: "4.5s" },
    { x: "15%", y: "80%", delay: "0.8s", duration: "6s" },
    { x: "95%", y: "85%", delay: "3.2s", duration: "3.8s" },
    { x: "8%", y: "50%", delay: "1.2s", duration: "5.2s" },
    { x: "40%", y: "10%", delay: "2.8s", duration: "4.2s" },
    { x: "70%", y: "90%", delay: "0.3s", duration: "5.8s" },
    { x: "28%", y: "88%", delay: "3.8s", duration: "3.3s" },
    { x: "88%", y: "12%", delay: "1.8s", duration: "4.8s" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute text-white/10 text-4xl font-bold animate-float"
          style={{
            left: element.x,
            top: element.y,
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {element.icon}
        </div>
      ))}

      {/* Animated particles - only render on client to avoid hydration mismatch */}
      {isClient &&
        particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300/30 to-pink-300/30 rounded-full animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
    </div>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>

      {/* Floating elements */}
      <FloatingElements />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with stagger animation */}
        <div className="overflow-hidden mb-6">
          <h1
            className={`text-4xl md:text-6xl font-bold transition-all duration-1000 ease-out ${
              isVisible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-full opacity-0"
            }`}
          >
            <span className="inline-block">From your wallet to </span>
            <span className="inline-block text-yellow-300 relative">
              Wall Street
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-lg animate-pulse"></div>
            </span>
          </h1>
        </div>

        {/* Subtitle with delayed animation */}
        <div className="overflow-hidden mb-8">
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-full opacity-0"
            }`}
          >
            Learn finance with real-world videos, crisp case studies, and
            future-ready courses.
          </p>
        </div>

        {/* Enhanced buttons */}
        <div
          className={`flex gap-4 justify-center transition-all duration-1000 ease-out delay-600 ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-full opacity-0"
          }`}
        >
          <a
            href="/learn"
            className="group relative px-8 py-4 rounded-full font-semibold bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Start Learning</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300"></div>
          </a>

          <a
            href="/about"
            className="group relative px-8 py-4 rounded-full font-semibold border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-white/70 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div> */}
      </div>

      {/* Enhanced wave divider with animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M321.39 56.44c58.74 10.79 117.48 21.59 176.22 27.55 58.74 5.96 117.48 6.06 176.22 2.27 58.74-3.8 117.48-11.4 176.22-13.99 58.74-2.59 117.48.82 176.22 8.41 58.74 7.59 117.48 19.37 176.22 28.16V0H0v27.71c107.13 15.27 214.26 28.93 321.39 28.73z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(2deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
