"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shared/Button";
import logo from "@/app/assets/logo.png";

export const Navbar = () => {

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-200 bg-white`}
    >
      <nav
        className={`relative flex justify-between items-center h-20 md:h-[88px] transition duration-200 w-full max-w-screen-2xl px-4 md:px-10 lg:px-20 mx-auto text-white`}
      >
        <Link
          href={"/"}
          className="flex items-center gap-1 z-50"
        >
          <Image
            src={logo}
            alt="Nuga pay Logo"
            className="h-[27px] md:h-10 w-auto max-w-[184px] md:max-w-[200px] order-1 md:order-2"
          />
        </Link>
        <Button onClick={()=>{}} variant="primary" className="!min-h-10">Get the App</Button>
      </nav>
      <div className="w-full h-px bg-gradient-to-l from-[#474F9A] to-[#D6DAFF]"></div>
    </header>
  );
};
