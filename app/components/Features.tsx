import feature1 from "../../public/assets/feature-1.svg";
import feature2 from "../../public/assets/feature-2.svg";
import feature3 from "../../public/assets/feature-3.svg";
import CheckMark from "../../public/assets/check.svg";
import BlueButton from "../../public/assets/blue-button.svg";
import GreenButton from "../../public/assets/green-button.svg";
import PinkButton from "../../public/assets/pink-button.svg";
import Image from "next/image";

export default function Features() {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]' id="features">
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={feature1}
          alt='Feature 1 image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium text-[#0085ff] text-[20px] lg:text-[18px]'>
            Product monitoring
          </h3>
          <h1 className='pt-[13px] text-1xl font-medium text-[#172026] lg:text-[43px] lg:lead lg:gap-y-[10px]'>
            Simplify the product building process by 5x
          </h1>
          <Image
            src={feature1}
            alt='feature1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36585C] lg:text-[18px]'>
            Create your product with the help of the tools you already
            have.Streamline your startups journey.
          </p>

          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-3 text-[#36585C] '>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Lorem Ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Lorem Ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Lorem Ipsum dolor sit amet
            </li>
          </ul>
          <p className='flex items-center gap-x-3 text-[#0085FF] pt-[24px] font-medium lg:text-[18px]'>
            Learn More
            <span>
              <Image src={BlueButton} alt='BlueButton' />
            </span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row'>
        <Image
          src={feature2}
          alt='Feature 1 image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
          <h3 className='font-medium text-[#4aaf48] text-[20px] lg:text-[18px]'>
            Progress tracking and reporting
          </h3>
          <h1 className='pt-[13px] text-1xl font-medium text-[#172026] lg:text-[43px] lg:lead lg:gap-y-[10px]'>
            Create milestones and gamifed steps to optimize your product journey
          </h1>
          <Image
            src={feature2}
            alt='feature1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36585C] lg:text-[18px]'>
            With the help of the tools you already have, create your product and
            track your progress.Make it obvious for other teams to know how you
            do
          </p>

          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-3 text-[#36585C] '>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Lorem Ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Lorem Ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Lorem Ipsum dolor sit amet
            </li>
          </ul>
          <p className='flex items-center gap-x-3 text-[#58b35f] pt-[24px] font-medium lg:text-[18px]'>
            Learn More
            <span>
              <Image src={GreenButton} alt='BlueButton' />
            </span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={feature3}
          alt='Feature 1 image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium text-[#0085ff] text-[20px] lg:text-[18px]'>
            Investor and Founder meetings
          </h3>
          <h1 className='pt-[13px] text-1xl font-medium text-[#172026] lg:text-[43px] lg:lead lg:gap-y-[10px]'>
            Make it easy for your team to streamline the investor pipeline and
            find the right investor
          </h1>
          <Image
            src={feature3}
            alt='feature1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36585C] lg:text-[18px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aspernatur voluptate aliquid a placeat rerum perferendis quam.
            Beatae culpa ducimus consequatur modi necessitatibus non quibusdam
            dolorem fugit quo excepturi reprehenderit facere temporibus,
            assumenda commodi accusantium ipsam veniam tempora laudantium vero!
          </p>

          <div className='flex w-full gap-x-[24px]  pt-[25px]'>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#36585C]">120+</h3>
              <p className="text-[#36585C]">Lorem ipsum</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#36585C]">190+</h3>
              <p className="text-[#36585C]">Lorem ipsum</p>
            </div>
          </div>
          <p className='flex items-center gap-x-3 text-[#ff007b] pt-[24px] font-medium lg:text-[18px]'>
            Learn More
            <span>
              <Image src={PinkButton} alt='BlueButton' />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
