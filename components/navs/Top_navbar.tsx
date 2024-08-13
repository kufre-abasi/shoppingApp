'use client'

  
  // Import necessary modules
  'use client'
  import Image from 'next/image';
  import React,{useState,useEffect} from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { toggleTheme } from '~/app/Store/slices/theme';
  import DarkModeIcon from '~/components/ui/icons/DarkModeIcon';
  import LightModeIcon from '~/components/ui/icons/LightModeIcon';
  import NotificationIcon from '~/components/ui/icons/NotificationIcon';
  import MobileSearchIcon from '~/components/ui/icons/MobileSearchIcon'
  // import Input from '~/components/ReuseableInput';
import SearchNormalIcon from '~/components/ui/icons/SearchNormalIcon';
import ContainLayout from '~/components/Container';

  // Define the component
  const TopNavbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode === "true") {
        enableDarkMode();
      }
    }, []);
  
    const toggleDarkMode = () => {
      if (darkMode) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    };
  
    const enableDarkMode = () => {
      document.body.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("darkMode", "true");
    };
  
    const disableDarkMode = () => {
      document.body.classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("darkMode", "false");
    };
  
     
  return (
    <div
      className="flex sticky top-0 z-30 border-b border-gray-300 justify-between px-4 lg:px-13  bg-[#151515] text-white w-full
      items-center "
    >
      <ContainLayout>
        <div className="flex  justify-between mx-auto   py-6 items-center ">
          <div className="font-gooper text-2xl ">shoppingApp</div>
          <div className="flex gap-2 lg:gap-2 items-center">
            {/* <div className="cursor-pointer" onClick={toggleDarkMode}>
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </div> */}
          </div>
        </div>{' '}
      </ContainLayout>
    </div>
  );
}

export default TopNavbar