import React,{useState} from 'react'
import { DialogHeader, DialogTrigger,Dialog,DialogContent,DialogTitle,DialogFooter,DialogClose } from '../dialog'
import Loading from '../loading'

interface Modal  {
    trigger :any
    dialogHeader:string
    dialogTitle:string
    handleFunction: () => Promise<void>;
    loading:any
}

const ShadModal = ({trigger,dialogHeader,dialogTitle,handleFunction,loading}:Modal) => {
  return (
 
      <Dialog>
    <DialogTrigger asChild>
      
       {trigger}

    </DialogTrigger>
    <DialogContent className=" bg-white dark:bg-[#131313] text-black dark:text-white ">
      <DialogHeader>
        <DialogTitle className="font-bold text-start pt-6   font-gooper text-base md:text-[18px] leading-6">
          {dialogTitle}
        </DialogTitle>
        {/* <DialogDescription>
Are you sure you want to log out?
</DialogDescription> */}
      </DialogHeader>
      <h1 className="text-sm">{dialogHeader}</h1>
      <DialogFooter className=" justify-between !flex md:items-center">
        <button
          onClick={handleFunction}
          className="text-sm bg-black dark:bg-[#000000] w-full border-bg-[#000000] border border-[#D0D5DD75] text-[#71E214] py-[16px] px-[27px] font-[450] rounded-[6px]"
        >
          {loading ? <Loading />  : ' Yes!'}
        </button>
        <DialogClose asChild>
          <button className="text-sm bg-black dark:bg-[#000000] w-full border-bg-[#000000] border border-[#D0D5DD75] text-[#71E214] py-[16px] px-[27px] font-[450] rounded-[6px]">
            No!
          </button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
   
  )
}

export default ShadModal