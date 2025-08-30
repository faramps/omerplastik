"use client";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/store/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from "react";


export default function LanguageDropdown() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: any) => state.language.language);

  const getFlag = () => {
    switch (currentLanguage) {
      case "tr":
        return <span className="fi fi-tr w-6 h-6" />;
      case "en":
        return <span className="fi fi-gb w-6 h-6" />;
      case "de":
        return <span className="fi fi-de w-6 h-6" />;
      default:
        return <span className="fi fi-xx" />; // globe vs fallback
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 p-2">
          {getFlag()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex flex-col p-1 w-fit"
      >
        <DropdownMenuItem
          className="flex items-center p-2 cursor-pointer transition-transform hover:scale-110"
          onClick={() => dispatch(setLanguage("tr"))}
        >
          <span className="fi fi-tr w-6 h-6" />
          <span className="ml-2">Türkçe</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center p-2 cursor-pointer transition-transform hover:scale-110"
          onClick={() => dispatch(setLanguage("en"))}
        >
          <span className="fi fi-gb w-6 h-6" />
          <span className="ml-2">English</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center p-2 cursor-pointer transition-transform hover:scale-110"
          onClick={() => dispatch(setLanguage("de"))}
        >
          <span className="fi fi-de w-6 h-6" />
          <span className="ml-2">Deutsch</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}