"use client";

// Import necessary modules
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "~/app/Store/slices/theme";
import DarkModeIcon from "~/components/ui/icons/DarkModeIcon";
import LightModeIcon from "~/components/ui/icons/LightModeIcon";
import NotificationIcon from "~/components/ui/icons/NotificationIcon";
import MobileSearchIcon from "~/components/ui/icons/MobileSearchIcon";
import WalletLink from "../NavLink/WalletLink";
import FeedsIcon from "~/public/icons/FeedsIcon.svg";
import Avatars from "~/public/icons/Avatars.svg";
import HiveIcon from "~/public/icons/HiveIcon.svg";
import WalletIcon from "~/public/icons/WalletIcon.svg";
import Link from 'next/link'
import ChatIcon from "~/public/icons/ChatIcon.svg";
import SavedIcon from "~/public/icons/SavedIcon.svg";
import AdsIcon from "~/public/icons/AdsIcon.svg";
import WhiteNotifyIcon from "~/components/ui/icons/WhiteNotifyIcon";
import WBookMarkIcon from "~/components/ui/icons/WBookMarkIcon";
import Notification from '~/components/Notification/Modal';
// import Input from '~/components/ReuseableInput';
import SearchNormalIcon from "~/components/ui/icons/SearchNormalIcon";
import { useDarkMode } from "~/Context/DarkModeContext";
// Define the component
const WalletNav = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
 const [showNotification, setShowNotification] = useState(false);
  const handleToggleNotification = () => {
                setShowNotification((showNotification) => !showNotification);
  };
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
           <div className="flex gap-4 lg:gap-6 items-center">
          <div
            onClick={handleToggleNotification}
            role="button"
            className="hidden lg:block"
          >
            <WhiteNotifyIcon className="w-[40.57px] lg:w-[52px]" />
          </div>{' '}
          <Link className="lg:hidden block" href="/pages/notifications">
            <WhiteNotifyIcon className="w-[40.57px] lg:w-[52px]" />
          </Link>
  
          {showNotification && (
            <Notification
              handleToggleNotification={() =>
                setShowNotification((showNotification) => !showNotification)
              }
            />
          )}
          <div role="button">
            <Link href="/pages/profile">
              <Image
                src="/svg/UserAvater.svg"
                className="w-[40.57px] lg:w-[52px]"
                width="52"
                height="52"
                alt=""
              />
            </Link>
          </div>
          <div className="cursor-pointer" onClick={toggleDarkMode}>
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
        </div>
      </div>
      <div className="lg:hidden feed_container flex flex-col w-full bg-white  dark:text-white dark:bg-black pb-3 ">
        <div className=" flex hide-scrollbar justify-between overflow-hidden w-full overflow-x-auto gap-4">
          {links.map((link, index) => (
            <div className=" flex flex-nowrap ">
              <WalletLink
                name={link.name}
                icon={link.icon}
                routeName={link.routeName}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletNav;

const links = [
  {
    name: 'Hive',
    icon: HiveIcon,
    routeName: '/pages/hive'
  },
  {
    name: 'Wallet',
    icon: WalletIcon,
    routeName: '/pages/wallet'
  },
  {
    name: 'Saved',
    icon: SavedIcon,
    routeName: '/pages/saved'

  },
  {
    name: 'Ads',
    icon: AdsIcon
  }
];
