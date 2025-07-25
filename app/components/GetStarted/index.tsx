'use client'
import { Button } from "../shared/Button";
import { downloadApp } from "../shared/helper";
// import { dashboardLink } from "../shared/helper";

export const GetStarted = () => {
  
  return (
    <section className="bg-dark-gradient bg-center bg-cover py-20 md:py-[150px]">
      <div className="container px-4 lg:px-10 mx-auto">
        <h3
          className={`font-[family-name:var(--font-gilroy-semibold)] text-[30px] md:text-[55px] leading-10 md:leading-[70px] text-center text-white max-w-[22ch] mx-auto mb-[75px]`}
        >
          Redefine Payments and Get Started with <i className="font-[family-name:var(--font-gilroy-bold)]">NUGAPAY</i>
        </h3>
        <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] justify-center items-center">
          <Button onClick={downloadApp}>Download the App</Button>
          {/* <Button onClick={dashboardLink}>Get Started</Button> */}
        </div>
      </div>
    </section>
  );
};
