import React from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const AuthLayout = ({
  children,
  photo,
 
}:any) => {
  return (
<>

      <div className="mx-auto max-w-[1460px] ">
      {children}
        </div>
</>

  );
};

export default AuthLayout;
