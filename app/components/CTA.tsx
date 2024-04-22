import arrow from "../../public/assets/arrow.png"
import Image from "next/image";

export function Cta() {
  return (
    <div className='w-full rounded-[16px] bg-gradient-to-br from-yellow-600 to-red-600 px-[33px] text-center lg:my-[60px] lg:px-[320px] lg:py-[90px]'>
      <h1 className='text-white text-[32px] lg:text-[56px] leading-[64px]'>Build your startup like a pro</h1>
      <p className='text-white pt-6 lg:pt-[49px] lg:text-[18px]'>
        Join over 50+ founder who boost their startup journey with utmost
        efficiency!
      </p>

      <div className='mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[38px] '>
        <button className='py-[16px] px-[32px] bg-white rounded-[6px] text-orange-500 w-fit font-medium'>
          Try for free
        </button>
        <button className="flex w-full items-center justify-center gap-x-3 mt-[31px] text-white font-medium lg:w-fit lg:mt-0">Contact Sales<span><Image src={arrow} alt="arrow"/></span></button>
      </div>
    </div>
  );
}
