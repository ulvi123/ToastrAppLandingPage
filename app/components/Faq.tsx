"use client";

import * as Accordion from "@radix-ui/react-accordion";
import plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What is ToastrApp doing for he product teams",
    answer: "Making their life easier",
  },
  {
    question: "How I can use the app?",
    answer: "You can use it in the browser",
  },
  {
    question: "How I can use the app?",
    answer: "You can use it in the browser",
  },
  {
    question: "How I can use the app?",
    answer: "You can use it in the browser",
  },
];

export function Faq() {
  return (
    <div className='flex flex-col w-full py-[49px] lg:py-[60px] lg:flex-row lg:gap-x-6'>
      <div className='lg:w-1/3 lg:py-[34px] lg:pr-[55px]'>
        <h3 className='text-[#ff007b] font-medium text-[14px] lg:text-base'>
          Frequently Asked Questions
        </h3>
        <h1 className='py-4 text-2xl font-medium text-[#575757] lg:leading-[59px] '>
          Lets answer everything you wanna know
        </h1>
        <p className='text-[#36585C] pb-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="lg:w-2/3">
        <Accordion.Root
          type='single'
          defaultValue='item-1'
          collapsible
          className='flex flex-col gap-y-4'>
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className='bg-[#E3F1EF] p-[16px] rounded-[8px]'>
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className='text-left font-medium text-[#12870b] lg:text-[18px]'>
                      {item.question}
                    </p>
                    <span>
                      <Image src={plus} alt='plusIcon' className="h-10 w-10 lg:w-6 lg:h-6" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className='pt-2 text-[#36485c]'>{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
