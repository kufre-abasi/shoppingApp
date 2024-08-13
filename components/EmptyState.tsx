import React from 'react'
import Image from 'next/image'
import Button from "~/components/ui/button/Button";

const EmptyState = () => {
  return (
    <div className="bg-[#f6f6f6] flex flex-col justify-center items-center py-5  gap-2  dark:bg-[#141414] w-full  rounded-md">
    <Image
      src="/images/people.png"
      width="100"
      className="w-12 h-12"
      height="100"
      alt="wk"
    />
    <p className="md:text-base text-sm font-general_Sans font-medium">
      You are pretty new here
    </p>
    <p className="md:text-sm text-xs font-general_Sans font-medium">
      Kindly join a hive to get started
    </p>
    <Button className="border max-w-[226px] w-full p-3 rounded-md font-general_Sans font-sm border-black dark:border-[rgba(255,255,255,1)]">
      See suggested hive
    </Button>
    </div>
  )
}

export default EmptyState