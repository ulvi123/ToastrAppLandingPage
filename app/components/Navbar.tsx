"use client";

import Image from "next/image";
import Logo from "../../public/assets/logo2.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Enterprise",
    href: "#enterprise",
  },
  {
    name: "Faq",
    href: "#faq",
  },
];

export function Navbar() {

  const handleClick = (e: any, href: any) => {
    e.preventDefault();
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
      <div className='flex items-center justify-between gap-5'>
        <Image src={Logo} alt='logo' className='h-10 w-10 lg:h-10 lg:w-10' />
        <div className='hidden lg:flex pl-[78px] gap-x-[55px]'>
          {navLinks.map((link, index) => (
            <Link href={link.href} passHref key={index}>
              <p onClick={(e) => handleClick(e, link.href)}>
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className='flex items-center  gap-x-5'>
        <p className='hidden lg:block font-medium tx-[#36584c] pr-[56px]'>
          Open an Account
        </p>
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
