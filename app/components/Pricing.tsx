import Check from "../../public/assets/check.svg";
import Image from "next/image";

export function Pricing() {
  return (
    <div className='py-[49px] lg:py-[60px]' id="pricing">
      <h1 className='text-[#172026] text-center font-medium text-[24px] text-2xl lg:text-[42px]'>
        Pricing specific for you
      </h1>
      <p className='pt-[16px] pb-[40px] text-center text-[#364568] lg:text-[19px]'>
        You get what you pay for!
      </p>

      <div className='flex flex-col gap-y-6 lg:flex-row gap-x-6'>
        <div className='w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className='font-medium text-[#4328EB] text-[19px] lg:text-xl'>
              Free Trial
            </h3>
            <p className='pt-[13px] text-[#36485C] lg:text-'>
              Perfect for the first touch
            </p>
            <h2 className='pt-4 text-[25px] font-medium'>
              0$<span className='text-[#5f7896]'>/month</span>
            </h2>
            <ul className='flex flex-col gap-y-2 pt-[16px] text-[16px] text-[#5f7896]'>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
            </ul>
          </div>
          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#432BEB] font-medium  '>
            Start trial
          </button>
        </div>

        <div className='w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className='font-medium text-white text-[19px] lg:text-xl'>
              Premium
            </h3>
            <p className='pt-[13px] text-white lg:text-'>
              Popular among startups
            </p>
            <h2 className='pt-4 text-[25px] font-medium text-white'>
              50$<span className='text-white'>/per seat</span>
            </h2>
            <ul className='flex flex-col gap-y-2 pt-[16px] text-[16px]  text-white'>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' className="text-white" />
                </span>
                Lorem ipsum dolor
              </li>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
              <li className='flex items-center gap-x-3'>
                <span>
                  <Image src={Check} alt='check' />
                </span>
                Lorem ipsum dolor
              </li>
            </ul>
          </div>
          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#432BEB] font-medium  '>
            Get Started
          </button>
        </div>

        <div className='w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className='font-medium text-[#4328EB] text-[19px] lg:text-xl'>
              Enterprise
            </h3>
            <p className='pt-[13px] text-[#36485C] lg:text-'>
              Ideal for Medium and Big companies
            </p>
            
            <h2 className='pt-4 text-[25px] font-medium'>
              Custom
            </h2>
            <p className="pt-4 text-[16px] text-[#36458c] mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="pt-4 text-[16px] text-[#36458c] mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perspiciatis quos, dolore ipsam ea expedita quaerat </p>
          </div>
          <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#432BEB] font-medium  '>
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
}
