'use client';
// Import necessary modules
'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavLink from '../NavLink/NavLink';
  import NotificationIcon from '~/components/ui/icons/NotificationIcon';
import FeedsIcon from '~/public/icons/FeedsIcon.svg';
import Avatars from '~/public/icons/Avatars.svg';
import HiveIcon from '~/public/icons/HiveIcon.svg';    
import ChatIcon from '~/public/icons/ChatIcon.svg';
import SavedIcon from '~/public/icons/SavedIcon.svg';
import AdsIcon from '~/public/icons/AdsIcon.svg'; 
import { useUserStore } from '~/app/Store/slices/userSlice';


// Define the component
const SideBar = () => {
const { user, fetchUser } = useUserStore((state) => ({
  user: state.user,
  fetchUser: state.fetchUser
}));

useEffect(() => {
  fetchUser();
}, [fetchUser]);
  return (
    <div className=" left-[-100%]  lg:left-0 h-fit  rounded-[12px] bg-white  dark:text-white dark:bg-black min-w-[273px] w-[273px] max-w-[273px] top-0  fixed lg:relative lg:flex hidden flex-col justify-between p-[25px_19px] z-20">
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
          </span>
          <h4 className="text-[16px] font-semibold text-[#4C4C4C]">
            {user?.data?.profile?.first_name} {user?.data?.profile?.last_name}
          </h4>
        </div>

        <div className="flex flex-col w-full space-y-[15px] gap-[22px] lg:space-y-[25px]">
          {links.slice(0, 6).map((link, index) => (
            <NavLink name={link.name} icon={link.icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const links = [
  {
    name: 'Feeds',
    icon: FeedsIcon
  },
  {
    name: 'Hive',
    icon: HiveIcon
  },
  {
    name: 'Chats',
    icon: ChatIcon
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