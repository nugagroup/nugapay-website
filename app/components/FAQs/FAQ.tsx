'use client'
import React, { useState } from "react";

interface FAQProps {
  title: string;
  content: string;
}
export const FAQ: React.FC<FAQProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mx-auto mb-4 md:mb-10 border-b-[1.192px] border-[#DADCE0] flex w-full max-w-[75rem] flex-col transition duration-200">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="mb-4 md:mb-[37px] flex min-w-[90%] items-center justify-between mx-2.5 md:mx-0"
      >
        <p className="cursor-pointer text-lg font-semibold text-foreground transition duration-300 md:text-[33px] font-[family-name:var(--font-gilroy-semibold)]">
          {title}
        </p>
        <div className="flex text-3xl md:text-5xl cursor-pointer justify-end transition duration-300 text-foreground">
          {!isActive? <>&#43;</>: <>&minus;</>}
        </div>
      </div>
      <div
        className={`${
          !isActive
            ? "transition-all duration-800 grid-rows-[0fr] opacity-0"
            : "transition-all duration-800 grid-rows-[1fr] opacity-100 pb-8"
        } overflow-hidden grid`}
      >
        <p
          aria-hidden={isActive}
          className={`text-sm text-foreground overflow-hidden md:text-2xl mx-2.5 md:mx-0 font-[family-name:var(--font-gilroy-semibold)]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
