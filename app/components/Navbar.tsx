import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Enterprise",
  },
  {
    name: "Contact",
  },
];

export function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>

      <div className="flex items-center justify-between gap-5">
        <Image src={Logo} alt='logo' />
        <div className="hidden lg:flex pl-[78px] gap-x-[55px]">
         {navLinks.map((item,index)=>(
            <p className="text-[#36485c] font-medium" key={index}>{item.name}</p>
         ))}
        </div>
      </div>

      
      <div className='flex items-center  gap-x-5'>
        <p className="hidden lg:block font-medium tx-[#36584c] pr-[56px]">Open an Account</p>
        <div className='flex items-center gap-2'>
          <Image src={User} alt='userProfile' />
          <span className='hidden font-medium text-[#36485C] lg:block'>
            Sign in
          </span>
        </div>
        <div>
          <Image src={Menu} alt='Menu' className='lg:hidden' />
        </div>
      </div>
    </nav>
  );
}
