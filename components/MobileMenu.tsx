import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button className="">
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="border-b border-black text-xl font-bold items-center text-center justify-center">Menu</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
  )
}

export default MobileMenu
