import BlueArrow from "../../public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import TrustPilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    <div className='pt-4 lg:pt-10'>
      <div className='px-[20px] lg:px-[290px]'>
        <h1 className='text-center text-[34px] leading-[44px] font-medium text-[#172026] lg:text-[64px] lg:leading-[75px]'>
          Build your startup like a Pro
        </h1>
        <p className='text-center pt-6 text-[#36585C] font-light lg:text-[19px] lg:leading-7'>
          Get an eye view with our customizable dashboard. Stay on top of
          things! Revolutionize the way you build your startup and your work
          process with our game-changing feature. Boost productivity and
          efficiency!
        </p>

        <div className='flex w-full pt-8 justify-center gap-x-8'>
          <button className='bg-[#4328EB] text-white w-1/2 py-4 px-8 rounded-[5px] lg:w-fit'>
            Try it free
          </button>
          <button className='w-1/2 text-[#4328EB] flex items-center justify-center gap-x-3 lg:w-fit'>
            View Pricing
            <span>
              <Image src={BlueArrow} alt='blueArrow' />
            </span>
          </button>
        </div>
      </div>

      <div className='relative flex h-full w-full justify-center'>
        <Image
          src={Gradient}
          alt='Gradient'
          className='min-h-[510px] w-full object-cover lg:h-auto'
        />
        <div className='w-full absolute bottom-5 flex flex-col items-center'>
          <Image
            src={HeroImage}
            alt='heroImage'
            className='-ml-4 h-[320px] sm:-mb-20 sm:h-[400px] lg:-mb-30 lg:h-auto xl:w-[65%]'
          />
          <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
            <p className='text-[#ffffff] text-center lg:text-[20px]'>
              Trusted by the companies
            </p>
            <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
              <Image src={Google} alt='Google' />
              <Image src={Slack} alt='' />
              <Image src={TrustPilot} alt='' />
              <Image src={Cnn} alt='' />
              <Image src={Clutch} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
