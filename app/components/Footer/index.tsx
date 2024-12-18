import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
// import { inter, sfProBold, sfProSemibold } from "@/app/fonts";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/app/assets/svg";

export const Footer = () => {
  const homeLinks = [
    {
      label: "About Us",
      url: "/#about",
    },
    // {
    //   label: "Products",
    //   url: "/#products",
    // },
    {
      label: "Contact Us",
      url: "/contact",
    },
    {
      label: "Careers",
      url: "/careers",
    },
  ];
  const developerLinks = [
    {
      label: "Overview",
      url: "/#overview",
    },
    {
      label: "Documentation",
      url: "/#documentation",
    },
    {
      label: "Integration",
      url: "/#integration",
    },
  ];
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <LinkedInIcon />,
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/",
      icon: <FacebookIcon />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/",
      icon: <InstagramIcon />,
    },
    { label: "X (formerly Twitter)", href: "https://x.com/", icon: <XIcon /> },
  ];
  return (
    <footer className="flex flex-col pt-[100px] md:pt-[150px] pb-9 md:pb-[60px]">
      <div className="container px-4 lg:px-10 mx-auto grid grid-cols-12 gap-y-8 md:gap-8 justify-between font-[family-name:var(--font-gilroy-regular)]">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-12 md:mr-auto order-2 md:order-1">
          <p className="text-[#6B7280] text-xl order-2 md:order-1">
            We are evolving and rapidly advancing through our love for
            innovation and creative brainstorming, which is why we have decided
            to create NUGA Pay.
          </p>
          <Image
            src={logo}
            alt="Uverus Logo"
            className="max-w-[184px] md:max-w-[200px] order-1 md:order-2"
          />
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-start-6 flex justify-between gap-4 order-1 md:order-2">
          <div>
            <p className={`text-[#232222] text-2xl mb-7`}>Home</p>
            <ul className="flex flex-col gap-[15px]">
              {homeLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className={` text-[#6B7280] whitespace-nowrap hover:underline underline-offset-2 transition duration-200`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={` text-[#232222] text-2xl mb-7`}>Developers</p>
            <ul className="flex flex-col gap-[15px]">
              {developerLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url} className={`text-[#6B7280] hover:underline underline-offset-2 transition duration-200`} target="_blank">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-9 lg:col-start-10 order-3">
          <p className={` text-[#232222] text-2xl mb-7 md:whitespace-nowrap`}>
            Get us on Socials
          </p>
          <div className="flex gap-5 md:gap-4 lg:gap-5 relative">
            {socialLinks.map((link, idx) => (
              <Link
                aria-label={`${link.label} profile`}
                href={link.href}
                key={idx}
                target="_blank"
                className="h-[30px] w-[30px] aspect-square bg-[#DB2481] hover:scale-110 active:scale-100 transition duration-200 flex justify-center items-center rounded-full"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container px-4 lg:px-10 mx-auto">
        <div
          className={`border-4 px-4 lg:px-10 md:border-[10px] rounded-full h-8 md:h-20 border-[#F9F9FA] flex justify-between items-center mt-[50px]  text-[#6B7280]`}
        >
          <div className="flex">
          <Image
            src={logo}
            alt="Nugapay Logomark"
            className="h-5 md:h-[30px] w-auto"
          />
          </div>
          <div className="text-[9px] md:text-lg">
            &copy; 2024 NUGAPAY. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
