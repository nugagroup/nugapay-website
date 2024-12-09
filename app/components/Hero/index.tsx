import React from "react";
import Image from "next/image";
import onlineBankingWindow from "@/app/assets/images/online-bank-window.png";
import passwordWindow from "@/app/assets/images/password-window.png";
import POSTerminal from "@/app/assets/images/POS-terminal-and-payment-options.png";
import { Button } from "../shared/Button";
import { ArrowRight } from "@/app/assets/svg";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-fit bg-primary pb-6 md:pb-[43px] mt-[66px] md:mt-[128px] w-[calc(100%_-_16px)] md:w-[calc(100%_-_30px)] lg:w-[calc(100%_-_60px)] max-w-screen-2xl mx-auto rounded-[30px]">
      <section className="container px-4 lg:px-10 flex justify-center items-start mx-auto relative pt-12 lg:pt-[82px]">
          <div className="flex flex-col">
            <h1
              className={`text-2xl sm:text-[30px] lg:text-[70px] leading-normal text-center text-[#FCFCFC] font-medium lg:font-semibold font-[family-name:var(--font-gilroy-medium)] lg:font-[family-name:var(--font-gilroy-semibold)] max-w-[24ch] mx-auto`}
            >
              Redefining <span className="font-[family-name:var(--font-gilroy-semibold)] md:font-[family-name:var(--font-gilroy-extrabold)] font-semibold md:font-extrabold">Banking</span> with 
              Next-Gen <span className="font-[family-name:var(--font-gilroy-semibold)] md:font-[family-name:var(--font-gilroy-extrabold)] font-semibold md:font-extrabold">Payment</span> Solutions
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl text-center text-dark max-w-[62ch] mx-auto mt-7 md:mt-[30px] mb-10 md:mb-12 relative z-10`}
            >
              We are evolving and rapidly advancing through our love for innovation and creative brainstorming, which is why we have decided to create NUGA Pay.
            </p>
            <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] justify-center items-center relative z-10">
              <Button>
                Get Started <ArrowRight />
              </Button>
              <Button>
                Download the App
              </Button>
            </div>
          </div>
      </section>
      <div className="flex justify-between items-center overflow-hidden">
        <Image
          src={onlineBankingWindow}
          alt="Online Banking Window"
          width={999}
          height={1368}
          aria-hidden
          className="absolute left-0 top-[60%] sm:top-[50%] lg:top-[35%] h-fit w-full max-w-[108px] lg:max-w-[300px] md:w-auto mix-blend-luminosity"
        />
        <Image src={POSTerminal} alt="POS Terminal and payment options" height={1650} width={1650} className="mix-blend-soft-light w-full h-full max-w-[200px] md:max-w-[300px] lg:max-w-[550px] max-h-[550px] flex self-center mx-auto mt-28 sm:mt-[71px] relative z-10" />
        <Image
          src={passwordWindow}
          alt="Password Window"
          width={984}
          height={685}
          aria-hidden
          className="absolute right-0 top-[60%] sm:top-[50%] lg:top-[32%] h-fit w-full max-w-[138px] lg:max-w-[328px] mix-blend-screen"
        />
      </div>
    </div>
  );
};
