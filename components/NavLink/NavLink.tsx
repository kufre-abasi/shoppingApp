"use client";
import { ReactElement } from "react";
import {motion} from 'framer-motion'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const NavLink = ({ icon, name }: { icon: string; name: string }) => {
  const pathname = usePathname();

  const activeClass =
    (pathname === "/pages" && name === "feed") ||
    pathname === `/pages/${name.toLowerCase()}`
      ? " font-bold bg-[#F0F0F0]  dark:bg-[#F9FFE929] rounded-[13px]"
      : "text-[#4C4C4C]";
  const activeTextClass =
    (pathname === "/pages" && name === "feed") ||
    pathname === `/pages/${name.toLowerCase()}`
      ? " dark:text-white text-[#4C4C4C]  "
      : "";

  return (

<motion.a
  href={name === "feed" ? "/pages" : `/pages/${name.toLowerCase()}`}
  className={`font-light flex gap-[12px] font-general_Sans rounded-[13px] dark:border-[rgba(255,255,255,0.13)] dark:shadow-lg !mt-0 items-center w-[25vh] lg:w-full p-[8px_8px] ${activeClass}`}
  whileHover={{
    backgroundColor: 'rgba(118, 116, 116, 1)',
    color: 'white',
    transition: { duration: 0.2 }
  }}
  whileTap={{ scale: 0.95 }}
>
  <span className="text-[1.7rem] h-[36px] w-auto object-contain flex items-start justify-start">
    <Image
      src={icon}
      className="lg:w-[36px] w-auto lg:h-[36px] object-cover"
      width="36"
      height="36"
      alt=""
    />
  </span>
  <h4 className={`text-[16px] font-semibold flex gap-[8px] items-center ${activeTextClass}`}>
    {name}{" "}
    <span className="bg-[#CE1126] text-sm text-white flex items-center justify-center size-6 rounded-full">
      2
    </span>
  </h4>
</motion.a>

  );
};

export default NavLink;
