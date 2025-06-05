"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Background2 } from "./bcg";
import { motion } from "framer-motion";
import { CardHoverEffectDemo } from "./Skillcards";
import ProjectTabs from "./ProjectsBuild";
import { DotBackgroundDemo } from "./DotBackground";
import { NavbarDemo } from "./Navbar";
import FloatingDockDemo from "./floatingButton";
export default function BackgroundBeamsDemo() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClose = () => {
    setActiveComponent(null); // Close active component
  };

  // Animation Variants
  const slideVariants = {
    up: { y: "-100%", opacity: 0 },
    down: { y: "100%", opacity: 0 },
    left: { x: "-100%", opacity: 0 },
    right: { x: "100%", opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  return (
    <>
    
      {/* Main Page */}
      <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        {/* <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business.
          </p>
        </div> */}
        <NavbarDemo/>
         <DotBackgroundDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
        <FloatingDockDemo/>
       
        {/* <BackgroundBeams /> */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <button
            onClick={() => setActiveComponent("up")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Up
            </span>
          </button>
          <button
            onClick={() => setActiveComponent("left")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Left
            </span>
          </button>
          <button
            onClick={() => setActiveComponent("right")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Right
            </span>
          </button>
          <button
            onClick={() => setActiveComponent("down")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Bottom
            </span>
          </button>
        </div>
      </div>

      {/* Slide-in Component */}
      {activeComponent && (
        <motion.div
          initial={slideVariants[activeComponent]} // Slide-in direction
          animate={slideVariants.visible} // Animate visibility
          exit={slideVariants[activeComponent]} // Slide-out direction
          transition={{ duration: 0.5 }} // Smooth transition
          className="fixed top-0 left-0 bottom-0 w-full h-full z-50 bg-black overflow-auto" // Fullscreen but transparent
        >
          {activeComponent === "up" && <Background2 onClose={handleClose} />}
{/*           {activeComponent === "left" && <BackgroundLeft onClose={handleClose} />} */}
          {activeComponent === "right" && <CardHoverEffectDemo  onClose={handleClose} />}
          {activeComponent === "left" && <ProjectTabs  onClose={handleClose} />}
         {/*  {activeComponent === "down" && <BackgroundDown onClose={handleClose} />} */}
        </motion.div>
      )}
    </>
  );
}
