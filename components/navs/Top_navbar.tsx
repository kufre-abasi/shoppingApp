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
import Link from 'next/link';
import CartIcon from '~/components/ui/icons/CartIcon';
import { useCartStore } from '~/app/Store/slices/cart';

  // Define the component
  const TopNavbar = () => {
    const [darkMode, setDarkMode] = useState(false);

       const { cartItems, addToCart, updateCartQuantity } = useCartStore(
         (state) => ({
           cartItems: state.cartItems,
           addToCart: state.addToCart,
           updateCartQuantity: state.updateCartQuantity
         })
       );
const cartItemLength = Object.keys(cartItems).length;
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
        <div className="flex  justify-between w-full gap-4  py-6 items-center ">
          <Link href={`/`} className="w-full">
            <div className="font-gooper text-2xl ">shoppingApp</div>
          </Link>
          <div className="flex gap-2 lg:gap-2 items-center">
            <Link
              href={`/pages/cart`}
              className="w-full bg-white relative p-3 rounded-full"
            >
              <CartIcon />
              <span className="bg-red-600 text-white px-2 py-1 absolute -top-2 -right-2 rounded-full">
                {cartItemLength}
              </span>
            </Link>

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