import React, { FC, MouseEvent, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
interface FillButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children:ReactNode
  style:any
  type?:any
  disabled?:boolean
}



const FillButton: FC<FillButtonProps> = ({ onClick, children,style,type,disabled}) => {

  
  return (
    <button className={`fill-button rounded-[6px] text-sm font-bold py-3 px-7 ${style}`}  type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default FillButton;
