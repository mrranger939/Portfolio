import React from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

/**
 * Footer Component
 * A minimalist, responsive footer for the portfolio with a glassmorphic style.
 * It includes copyright information and social media links.
 */
export default function Footer() {
  return (
    <footer className="relative z-20 text-white py-6 px-6 w-full bg-neutral-950 ">
      <div className="container mx-auto max-w-6xl">
        {/* Flex container for content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright Text */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Mohammed Shujath Nawaz. All Rights Reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/mrranger939" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammed-shujath-nawaz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
            <a 
              href="mailto:mohammedshujathnawaz@gmail.com" 
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <IconMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
