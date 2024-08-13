'use client'
import React from 'react'

const Modal = ({children}:any) => {
  return (
   
        <div className="fixed  top-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 backdrop-blur">
      <div className="w-full h-full  rounded-lg md:overflow-hidden overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default Modal