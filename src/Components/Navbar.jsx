"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useState } from "react";

export function NavbarDemo({setActiveComponent}) {
  const navItems = [
    {
      name: "TimeLine",
      link: "#timeLine",
      direction: 'up'
    },
    {
      name: "Projects",
      link: "#projects",
      direction: 'left'
    },
    {
      name: "Skills",
      link: "#skills",
      direction:'right'
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-neutral-950">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} setActiveComponent={setActiveComponent}/>
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
              <a 
                href="https://github.com/mrranger939" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </a>
            </NavbarButton>
            <NavbarButton variant="secondary">
              <a 
                href="https://www.linkedin.com/in/mohammed-shujath-nawaz/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </a>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => {setIsMobileMenuOpen(false); setActiveComponent(item.direction)}}
                className="relative w-full text-neutral-300 hover:font-bold"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
