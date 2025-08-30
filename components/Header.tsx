import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Ghost, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import LanguageDropdown from "./LanguageDropdown";



export default function Header() {
  return (
    <header className="w-full dark:bg-black/50 bg-white/50 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto py-4 flex justify-between items-center">

          <Link href="/" className="text-lg font-semibold dark:hidden ">
            <Image src="/images/lightlogo.png" alt="Ömer Plastik" className="object-contain"  width={250} height={100} />
          </Link>
          <Link href="/" className="text-lg font-semibold hidden dark:inline">
            <Image src="/images/darklogo.png" alt="Ömer Plastik" className="object-contain"  width={250} height={100} />
          </Link>

          <nav className="space-x-4 hidden md:flex items-center"> 

            <Link href="/" className="hover:text-blue-500">
              Anasayfa
            </Link>

            <Link href="/about" className="hover:text-blue-500">
              Hakkında
            </Link>

            <Link href="/contact" className="hover:text-blue-500">
              İletişim
            </Link>
            <ModeToggle/>
            <LanguageDropdown/>
            
            </nav>
            <div className="md:hidden flex container mx-auto justify-end gap-2 mr-3">
                
                <ModeToggle/>
                <MobileMenu/>
                <LanguageDropdown/>


            </div>
          
        </div>
    </header>
  )
}
