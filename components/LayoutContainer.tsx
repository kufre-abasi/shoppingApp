import React, { ReactNode } from 'react'

const LayoutContainer = ({children}:any) => {
  return (
    <div className=" feed_container w-full  ">
      {children}
      {/* lg:max-w-[1460px] lg:mx-auto */}
    </div>
  );
}

export default LayoutContainer
