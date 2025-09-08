import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-scroll"
import Translations from "./Translations"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-b border-black text-xl font-bold text-center dark:border-white mt-2">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col items-center mt-6 gap-y-4">
          <Link
            to="about"
            className="border-b border-black dark:border-white text-xl w-full text-black dark:text-white"
            smooth={true}
            duration={500}
            offset={-152}
            activeClass="text-blue-500 font-bold"
            spy={true}
          >
            <Translations id="about" />
          </Link>

          <Link
            to="products"
            className="border-b border-black dark:border-white text-xl w-full text-black dark:text-white"
            smooth={true}
            duration={500}
            offset={-152}
            activeClass="text-blue-500 font-bold"
            spy={true}
          >
            <Translations id="products" />
          </Link>

          <Link
            to="contact"
            className="border-b border-black dark:border-white text-xl w-full text-black dark:text-white"
            smooth={true}
            duration={500}
            offset={-152}
            activeClass="text-blue-500 font-bold"
            spy={true}
          >
            <Translations id="contact" />
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
