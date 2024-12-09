import React from "react";
import { FAQ } from "./FAQ";

const faqData = [
  {
    title: "What data does NUGAPAY have access to?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, perferendis vitae. Doloribus neque quo totam assumenda soluta laboriosam beatae consectetur!`,
  },
  {
    title: "Can I edit my data on NUGAPAY?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, perferendis vitae. Doloribus neque quo totam assumenda soluta laboriosam beatae consectetur!`,
  },
  {
    title: "Can I delete my data on NUGAPAY?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, perferendis vitae. Doloribus neque quo totam assumenda soluta laboriosam beatae consectetur!`,
  },
  {
    title: "Is my data secure with NUGAPAY?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, perferendis vitae. Doloribus neque quo totam assumenda soluta laboriosam beatae consectetur!`,
  },
  {
    title: "How does NUGAPAY ensure the security of transactions?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, perferendis vitae. Doloribus neque quo totam assumenda soluta laboriosam beatae consectetur!`,
  },
];

export const FAQs: React.FC = () => {
  return (
    <section
      id="faqs"
      className="w-full px-4 md:px-[60px] md:w-full max-w-screen-2xl mx-auto pt-20 md:pt-[251px] pb-[5.625rem] md:pb-[10.5625rem] bg-[#F9FAFC] md:bg-transparent bg-faq-bg bg-contain md:bg-none"
    >
      <h2 className="text-foreground text-[30px] md:text-[55px] font-semibold text-center mx-auto mb-10 sm:mb-[60px] md:mb-20">Frequently asked questions</h2>
        <div className="w-full">
          {faqData.map((faq, index) => (
            <FAQ key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
    </section>
  );
};

