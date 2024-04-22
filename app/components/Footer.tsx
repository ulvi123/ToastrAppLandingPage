import Image from "next/image";
import logo from "../../public/assets/logo2.svg";
import Facebook from  '../../public/assets/Facebook.svg'
import Twitter from  '../../public/assets/X.svg'
import Feed from  '../../public/assets/Feed.svg'

export function Footer() {
  return (
    <div className='pt-[80px] pb-[40px] id="footer" '>
      <div className='flex items-center justify-center gap-x-[14px]'>
        <Image src={logo} alt='logo' className='h-10 w-10 lg:h-10 lg:w-10' />
        <p className='font-bold text-[#56485c]'>ToastrApp</p>
      </div>
      <ul className='flex flex-col items-center gap-y-[34px] pt-[58px] text-[#36458C] sm:flex-row sm:justify-center sm:gap-x-[10px] sm:pt-5'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Contact</li>
      </ul>

      <p className="pt-[56px] text-center text-[15px] font-medium">Copyright 2024. ToastrApp. All rights reserved.</p>
      <div className="flex items-center justify-center gap-x-[58px] pt-[42px]">
        <Image src={Facebook} alt="facebook"/>
        <Image src={Twitter} alt="Twitter"/>
        <Image src={Feed} alt="Feed"/>
      </div>
    </div>
  );
}
