'use client';

// Import necessary modules
'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '~/app/Store/slices/theme';
import DarkModeIcon from '~/components/ui/icons/DarkModeIcon';
import LightModeIcon from '~/components/ui/icons/LightModeIcon';
import NotificationIcon from '~/components/ui/icons/NotificationIcon';
import MobileSearchIcon from '~/components/ui/icons/MobileSearchIcon';
import WalletLink from '../NavLink/WalletLink';
import FeedsIcon from '~/public/icons/FeedsIcon.svg';
import Avatars from '~/public/icons/Avatars.svg';
import HiveIcon from '~/public/icons/HiveIcon.svg';
import WalletIcon from '~/public/icons/WalletIcon.svg';

import ChatIcon from '~/public/icons/ChatIcon.svg';
import SavedIcon from '~/public/icons/SavedIcon.svg';
import AdsIcon from '~/public/icons/AdsIcon.svg';
import WhiteNotifyIcon from '~/components/ui/icons/WhiteNotifyIcon';
import WBookMarkIcon from '~/components/ui/icons/WBookMarkIcon';

// import Input from '~/components/ReuseableInput';
import SearchNormalIcon from '~/components/ui/icons/SearchNormalIcon';
import { useDarkMode } from '~/Context/DarkModeContext';
// Define the component
const WalletNav = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex flex-col w-full justify-between  bg-white  dark:text-white dark:bg-black  items-center">
      <div className="flex feed_container justify-between  bg-white  dark:text-white dark:bg-black lg:py-4 py-3 items-center">
        <div>
          {darkMode ? (
            <Image
              src="/images/dark-logo.svg"
              className="w-20 md:w-32"
              width="127"
              height="42"
              alt=""
            />
          ) : (
            <Image
              src="/images/light.png"
              className="w-20 md:w-32"
              width="127"
              height="42"
              alt=""
            />
          )}
        </div>
        {/* <div className="lg:w-[40%] w-full lg:flex hidden">
          <div className=" relative w-full">
            <SearchNormalIcon className="absolute top-2.5 left-5 dark:text-white text-[#000000]" />
            <input
              type="text"
              required
              className="w-full rounded-[12px]  bg-[#F4F4F4] p-[10px_12px] !pl-14 dark:bg-[#F9FFE929] text-[#98A2B3] placeholder:text-[#98A2B3] outline-none  text-sm"
              placeholder="search"
            />
          </div>
        </div> */}
        <div className="flex gap-4 lg:gap-6 items-center">
          <div role="button">
            <WhiteNotifyIcon className="w-[40.57px] lg:w-[52px]" />
          </div>

          <div role="button">
            <Image
              src="/svg/UserAvater.svg"
              className="w-[40.57px] lg:w-[52px]"
              width="52"
              height="52"
              alt=""
            />
          </div>
          <div className="cursor-pointer" onClick={toggleDarkMode}>
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
        </div>
      </div>
      {/* <div className="lg:hidden feed_container flex flex-col w-full bg-white  dark:text-white dark:bg-black pb-3 ">
        <div className=" flex hide-scrollbar justify-between overflow-hidden w-full overflow-x-auto gap-4">
          {links.map((link, index) => (
            <div className=" flex flex-nowrap ">
              <WalletLink name={link.name} icon={link.icon} key={index} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default WalletNav;

const links = [
  {
    name: 'Hive',
    icon: HiveIcon
  },
  {
    name: 'Wallet',
    icon: WalletIcon
  },
  {
    name: 'Saved',
    icon: SavedIcon
  },
  {
    name: 'Ads',
    icon: AdsIcon
  }
];
