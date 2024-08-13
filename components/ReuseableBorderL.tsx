import React, { ReactNode } from 'react'
import { cn } from '~/lib/utils'


const ReuseableBorderL = ({children,className}:{children:ReactNode; className?:string;}) => {
  return (
    <div className={cn('w-full flex flex-col border-[1px]  dark:text-white border-[#0000001C]  dark:border-[rgba(255,255,255,0.13)] dark:shadow-lg  rounded-[12px]',className)} >
      {children}
    </div>
  )
}

export default ReuseableBorderL
