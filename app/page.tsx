import LanguageSwitcher from "@/components/LanguageSwitcher";
import React from "react";
import Translations from "../components/Translations";



export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <div className=" text-xl text-center items-center justify-center flex flex-1 mt-16">
        dehset purna
        <br />

        <Translations id="anne" />
        
      </div>
    </>
  );
}
