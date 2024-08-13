import React from 'react'

const HivesReuseableModal = ({children}:any) => {
  return (
   
    <div className="fixed left-0 right-0 top-0 w-full h-screen  bg-black bg-opacity-50 backdrop-blur">
    <div className="w-full h-full  rounded-lg md:overflow-hidden overflow-y-auto">
      {children}
    </div>
    </div>
  )
}

export default HivesReuseableModal
