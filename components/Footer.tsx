"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import Translations from "./Translations";

export default function Footer() {
  return (
    <footer className="relative bg-green-700 z-10 text-white ">
      <Image src="/images/footerbg.png" alt="Footer Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-20 " />
      <div className=" mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between relative z-10 max-w-7xl ">
        {/* Sol Taraf - Logo */}
        <div className="mb-6 md:mb-0 ">
          <Image
            src="/images/darklogo.png"
            alt="Logo"
            width={300}
            height={200}
            className="object-contain"
          />
          <div className="ml-4 text-white font-bold text-lg">  © {new Date().getFullYear()} Ömer Plastik. Tüm hakları saklıdır.</div>
        </div>
      

        {/* Sağ Taraf - Nav */}
        <nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-right">
          <Link to="homepage" smooth  duration={500} offset={-120} className=" transition font-bold  text-xl group relative"><Translations id="homepage"  />
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link to="about" smooth duration={500} offset={-120} className=" transition font-bold text-xl group relative"><Translations id="about"  />
           <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
           </Link>
          <Link to="products" smooth duration={500} offset={-120} className=" transition font-bold text-xl group relative"><Translations id="products"  />
           <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
           </Link>
          <Link to="contact" smooth duration={500} offset={-120} className=" transition font-bold text-xl group relative"><Translations id="contact"  />
           <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
           </Link>
        </nav>
      </div>

      <div className="text-center text-gray-400 text-sm pb-6">
        © {new Date().getFullYear()} Ömer Plastik. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
