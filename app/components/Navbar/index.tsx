"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shared/Button";
import { CloseMenu, Menu } from "@/app/assets/svg";
import logo from "@/app/assets/logo.png";

export const Navbar = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const navLinks: {
    label: string;
    href: string;
    type: string;
    variant?: "text" | "light" | "primary";
  }[] = [
    { label: "Business", href: "/#business", type: "link", variant: "text" },
    { label: "Contact Us", href: "/#contact", type: "link", variant: "text" },
    { label: "Languages", href: "/#lang", type: "dropdown", variant: "text" },
    { label: "Get the App", href: "/#", type: "button", variant: "light" },
    { label: "Get Started", href: "/#", type: "button", variant: "primary" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-200 bg-white`}
    >
      <nav
        className={`relative flex justify-between items-center h-11 md:h-[88px] transition duration-200 w-full max-w-screen-2xl px-4 md:px-10 lg:px-20 mx-auto`}
      >
        <Link
          href={"/"}
          className="flex items-center gap-1 z-50 w-1/5"
        >
          <Image
            src={logo}
            alt="Nuga pay Logo"
            className="h-[27px] md:h-10 w-auto max-w-[184px] md:max-w-[200px] order-1 md:order-2"
          />
        </Link>
        <ul
          className={`${
            isNavOpened ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition duration-200 text-[#171412] flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-14 md:gap-5 fixed md:relative top-0 left-0 w-full sm:w-4/5 lg:w-3/5 h-screen md:h-fit bg-white`}
        >
          {/* Center the first 3 links */}
          {navLinks.slice(0, 3).map((link, idx) => (
            link.type === "button" ? (
              <Button
                variant={link.variant}
                className="h-fit min-h-10 text-[28px] md:text-base"
                key={idx}
              >
                {link.label}
              </Button>
            ) : (
              <li
                key={idx}
                onClick={() => setIsNavOpened(!isNavOpened)}
                className={`text-[#171412] text-2xl md:text-sm hover:underline underline-offset-4 transition duration-200 whitespace-nowrap`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          ))}
          {/* Render the last 2 buttons at the end */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-full md:w-[45%] lg:w-full gap-6 sm:gap-12 md:gap-3">
            {navLinks.slice(3).map((link, idx) => (
              <Button
                variant={link.variant}
                className="h-fit min-h-10 text-2xl md:text-base"
                key={idx}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </ul>
        <button
          onClick={() => setIsNavOpened(!isNavOpened)}
          className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 z-50"
        >
          {isNavOpened ? <CloseMenu /> : <Menu />}
        </button>
      </nav>
      <div className="w-full h-px bg-gradient-to-l from-[#474F9A] to-[#D6DAFF] z-50 relative"></div>
    </header>
  );
};
