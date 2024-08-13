import React from 'react'

const ProfileBottomBorder = ({title,response}:any ) => {
  return (
    <div>
        <div className='flex justify-between items-center border-b py-4 dark:border-[#171717]'>
            <h1 className='font-general_Sans text-sm  font-medium text-[#7a7d87]'>{title}</h1>
            <h1 className='font-general_Sans text-sm  font-medium dark:text-white text-black'>{response}</h1>
        </div>
    </div>
  )
}

export default ProfileBottomBorder