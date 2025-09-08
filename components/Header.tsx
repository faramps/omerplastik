"use client"
import React, { useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "./ModeToggle";
import LanguageDropdown from "./LanguageDropdown";
import { Link } from "react-scroll";
import Translations from "./Translations";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full   z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 dark:bg-black/70 bg-white/70 shadow-md backdrop-blur-sm"
          : "py-4 dark:bg-black/30 bg-white/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Light logo */}
        <div
          onClick={scrollToTop}
          className="text-lg font-semibold dark:hidden cursor-pointer"
        >
          <Image
            src="/images/lightlogo.png"
            alt="Ömer Plastik"
            className="object-contain"
            width={scrolled ? 180 : 250}
            height={100}
            priority
          />
        </div>

        {/* Dark logo */}
        <div
          onClick={scrollToTop}
          className="text-lg font-semibold hidden dark:inline cursor-pointer"
        >
          <Image
            src="/images/darklogo.png"
            alt="Ömer Plastik"
            className="object-contain"
            width={scrolled ? 180 : 250}
            height={100}
          />
        </div>

        {/* Desktop menu */}
        <nav className="space-x-6 hidden md:flex items-center text-base ">
          <div
            onClick={scrollToTop}
            className=" cursor-pointer"
          >
            <div className="group relative font-bold text-lg">
              <Translations id="homepage"  />
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 dark:bg-white bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
            </div>
          </div>
          <Link
            to="about"
            className=" cursor-pointer"
            smooth
            duration={500}
            offset={-120}
            activeClass="text-green-500 font-bold "
            spy
          >
            <div className="group relative font-bold text-lg">
              <Translations id="about"  />
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 dark:bg-white bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
            </div>
            
          </Link>
          <Link
            to="products"
            className=" cursor-pointer"
            smooth
            duration={500}
            offset={-100}
            activeClass="text-green-500 font-bold "
            spy
          >
            <div className="group relative  text-lg font-bold">
              <Translations id="products" />
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 dark:bg-white bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
            </div>
          </Link>
          <Link
            to="contact"
            className=" cursor-pointer"
            smooth
            duration={500}
            offset={-100}
            activeClass="text-green-500 font-bold "
            spy
          >
            <div className="group relative text-lg font-bold">
              <Translations id="contact"  />
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 dark:bg-white bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
            </div>
          </Link>
          <LanguageDropdown />
          <ModeToggle />
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden flex container  justify-end gap-2 mr-3 mx-auto ">
          <LanguageDropdown />
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
