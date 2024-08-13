import React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
interface CN {
  className?:any
}
const Loading = ({className}:CN) => {
  return (
    
<div className={cn ("w-6 h-6 border-4 border-dashed flex justify-center items-center mx-auto rounded-full animate-spin dark:border-white",className)}></div>
   
  );
};

export default Loading;