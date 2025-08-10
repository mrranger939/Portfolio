import React from "react";
import sn from "../assets/photo.jpeg";
import FloatingDockDemo from "./floatingButton";
export default function Hero() {
  return (
    // This container is positioned above the parent's background effects.
    // It uses flexbox to create the two-column layout, which wraps on smaller screens.
    <div className="relative z-20 flex mt-9 flex-col md:flex-row items-center justify-center gap-12 p-6 w-full max-w-6xl mx-auto">
      {/* Left Column: Text content and links */}
      <div className="flex-1 text-center md:text-left text-white">
        <div className="bg-neutral-900/50 backdrop-blur-[2px] border text-left  border-white/10 rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Hi, <br /> I'm Mohammed Shujath Nawaz {/* 👋 */}
          </h1>
          <p className="mt-4 text-lg ">
            CS Engineer from Hyderabad 🇮🇳 | CBIT '26
          </p>
          <p className="mt-2  max-w-md  md:mx-0">
            Full-stack developer by skill, ML engineer by passion. I love
            bringing intelligent and complete applications to life, from concept
            to deployment.
          </p>
          <p className="mt-4 text-sm  max-w-md md:mx-0">
            Have an interesting problem or an opportunity? Let's connect.
          </p>
        </div>

        {/* Your FloatingDockDemo component goes here */}
        <FloatingDockDemo />
      </div>

      {/* Right Column: Image */}
      <div className="flex-shrink-0 mt-8 md:mt-0">
        <img
          src={sn}
          alt="A portrait of Ted"
          className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-neutral-800 shadow-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/300x300/1a1a1a/ffffff?text=Image+Error";
          }}
        />
      </div>
    </div>
  );
}
