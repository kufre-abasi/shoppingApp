'use client';

import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface WalletLinkProps {
  icon: string;
  name: string;
  notify?: string | null;
  comingSoon?: boolean;
  routeName?: string | null;
}

const WalletLink: React.FC<WalletLinkProps> = ({
  icon,
  name,
  notify,
  comingSoon,
  routeName,
}) => {
  const pathname = usePathname();

  const isActive = routeName && pathname.startsWith(routeName);
  const activeClass = isActive
    ? 'font-bold bg-[#F0F0F0] dark:bg-[#F9FFE929] lg:border-none border-[#0000003B] border-[1px] rounded-[13px]'
    : 'text-[#4C4C4C] lg:opacity-[100%] opacity-[59%]';
  const activeTextClass = isActive ? 'dark:text-white text-[#4C4C4C]' : '';

  return (
    <Link href={routeName || ''} className='underline-offset-0'>
      <motion.a
        className={`font-light flex gap-[12px] lg:flex-row flex-col font-general_Sans underline-none rounded-[13px] dark:border-[rgba(255,255,255,0.13)] dark:shadow-lg !mt-0 items-center w-fit lg:w-full p-[8px_12px_8px_12px] lg:p-[8px_8px] ${activeClass}`}
        whileHover={{
          backgroundColor: 'rgba(118, 116, 116, 1)',
          color: 'white',
          transition: { duration: 0.4 }
        }}
        whileTap={{ scale: 0.95 }}
      >

        
        <span className="text-[1.7rem] h-[36px] w-auto object-contain flex items-start justify-start">
          <Image
            src={icon}
            className="lg:w-[36px] w-auto lg:h-[36px] object-cover"
            width="36"
            height="36"
            alt={`${name} icon`}
          />
        </span>
        <h4 className={`lg:text-[16px] text-[12px] font-semibold flex gap-[8px] items-center ${activeTextClass}`}>
          {name}
          {(notify || comingSoon) && (
            <span
              className={`text-sm lg:flex hidden items-center justify-center rounded-full ${
                comingSoon
                  ? 'bg-[#FFEE94] text-[#434343] px-2'
                  : 'bg-[#CE1126] text-white size-6'
              }`}
            >
              {comingSoon ? 'Coming Soon' : notify}
            </span>
          )}
        </h4>
      </motion.a>
    </Link>
  );
};

export default WalletLink;
