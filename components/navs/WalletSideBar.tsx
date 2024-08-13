'use client';
// Import necessary modules
'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import WalletLink from '../NavLink/WalletLink';
  import NotificationIcon from '~/components/ui/icons/NotificationIcon';
import FeedsIcon from '~/public/icons/FeedsIcon.svg';
import Avatars from '~/public/icons/Avatars.svg';
import HiveIcon from '~/public/icons/HiveIcon.svg';    
import WalletIcon from '~/public/icons/WalletIcon.svg';
import SavedIcon from '~/public/icons/SavedIcon.svg';
import AdsIcon from '~/public/icons/AdsIcon.svg'; 
import { useUserStore } from '~/app/Store/slices/userSlice';

// Define the component
const WalletSideBar = () => {
const { user, fetchUser } = useUserStore((state) => ({
  user: state.user,
  fetchUser: state.fetchUser
}));

useEffect(() => {
  fetchUser();
}, [fetchUser]);
  return (
    <div className=" left-[-100%]  lg:left-0 h-fit  rounded-[12px] bg-white dark:border-[rgba(255,255,255,0.13)] dark:shadow-lg border-[1px] border-[#0000001C] dark:text-white dark:bg-black min-w-[273px] w-[273px] max-w-[273px] top-0  fixed lg:relative lg:flex hidden flex-col justify-between p-[24px_23px_24px_23px] z-20">
      <div className="flex flex-col grow gap-[22px] items-center ">
        <div className="font-light flex gap-[12px] !mt-0 items-center w-full p-[8px_8px]">
          <span className=" object-contain flex items-center justify-center">
            <Image
              src={Avatars}
              className=" object-cover"
              width="46"
              height="46"
              alt=""
            />
          </span>{' '}
          <h4 className="text-[16px] font-general_Sans dark:text-[rgba(118,116,116,1)] font-semibold text-[#4C4C4C]">
            {user?.data?.profile?.first_name} {user?.data?.profile?.last_name}
          </h4>
        </div>

        <div className="flex flex-col w-full space-y-[15px] gap-[22px] lg:space-y-[25px]">
          {links.slice(0, 6).map((link, index) => (
            <WalletLink
              name={link.name}
              icon={link.icon}
              notify={link.notify}
              comingSoon={link.comingSoon}
              routeName={link.routeName}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletSideBar;

const links = [
  {
    name: 'Hive',
    icon: HiveIcon,
    notify: '3',
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
    icon: AdsIcon,
    comingSoon: true
  }
];