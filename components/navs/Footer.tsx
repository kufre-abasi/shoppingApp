import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='dark:bg-[#242323] bg-white   px-8 md:px-32 py-9 text-black dark:text-white'>
<ul className='flex flex-wrap justify-center gap-4 items-center lg:justify-around'>
    <li className=' font-medium text-sm '>About Us</li>
    <li className=' font-medium text-sm '>Terms & Conditions</li>
    <li className=' font-medium text-sm '>Privacy Policy</li>
    <li className=' font-medium text-sm '>FAQs </li>
    <li className=' font-medium text-sm '>Contact Us</li>
</ul>
    </div>
  )
}

export default Footer
