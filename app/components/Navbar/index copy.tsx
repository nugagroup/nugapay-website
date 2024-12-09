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
    variant: 'text'|'light'|'primary';
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
        className={`relative flex justify-between items-center h-11 md:h-[88px] transition duration-200 w-full max-w-screen-2xl px-4 md:px-10 lg:px-20 mx-auto text-white`}
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
        <ul
          className={`${
            isNavOpened ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition duration-200 text-[#171412] flex flex-col md:flex-row items-center gap-14 md:gap-5 fixed md:relative top-0 left-0 pt-28 md:pt-0 w-full md:w-auto h-screen md:h-fit bg-white md:bg-transparent bg-opacity-20 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-0`}
        >
          {navLinks.map((link, idx) =>
            link.type === "button" ? (
              <Button
                variant={link.variant}
                className="h-fit min-h-10 text-[28px] md:text-base"
                key={idx}
              >
                {link.label}
              </Button>
            ): link.type === 'dropdown'? (<>
            </>): (
              <li
                key={idx}
                onClick={() => setIsNavOpened(!isNavOpened)}
                className={`text-[#171412] font-light md:font-medium text-[28px] md:text-base hover:underline underline-offset-4 transition duration-200`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          )}
        </ul>
        <button
          onClick={() => setIsNavOpened(!isNavOpened)}
          className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 z-50"
        >
          {isNavOpened ? <CloseMenu /> : <Menu />}
        </button>
      </nav>
      <div className="w-full h-px bg-gradient-to-l from-[#474F9A] to-[#D6DAFF]"></div>
    </header>
  );
};
