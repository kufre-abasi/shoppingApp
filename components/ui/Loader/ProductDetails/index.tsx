export const ProductDetailsLoader = () => {
  return (
    <>
      <>
        <div className="font-sansMedium animate-pulse">
          <div className="font-sansMedium flex flex-col gap-[16px] h-full  ">
            <div className="font-sansMedium flex flex-col gap-3  h-full  rounded-[20px]">
              <div className="md:h-[51px]  justify-center items-center w-full flex md:hidden flex-col">
                <div className="md:h-[51px] gap-4 w-full items-start justify-center flex md:hidden flex-col">
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex flex-row gap-1 items-center"></div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex lg:flex-row flex-col gap-[40px]">
                  <div className="lg:w-[70%]">
                    <div
                      className="w-full bg-[#D9D9D9] object-cover
                     rounded-[16px] flex h-[291px]  justify-center overflow-hidden items-center"
                    >
                      <img className=" w-full object-cover h-full rounded-[16px] " />
                    </div>

                    <div className="flex flex-row gap-4 mt-[14px]  items-center justify-between w-full">
                      <span className="text-indigo-950 text-[26px]  capitalize font-medium"></span>
                    </div>
                    <div className="flex flex-col gap-4 mt-[14px] text-left justify-between w-full">
                      <p className="text-[#000000] text-sm lg:text-[20px] font-medium"></p>
                      <p className="text-[#8E8E8E] text-[14px] font-normal"></p>
                    </div>
                  </div>
                  <div className=" w-full flex flex-col justify-between">
                    <div className="flex-1 space-y-6">
                      <div className="h-2 bg-[#F0F0F0] rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-[#F0F0F0] rounded col-span-2"></div>
                          <div className="h-2 bg-[#F0F0F0] rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-[#F0F0F0] rounded"></div>
                      </div>{' '}
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-[#F0F0F0] rounded col-span-2"></div>
                          <div className="h-2 bg-[#F0F0F0] rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-[#F0F0F0] rounded"></div>
                      </div>
                    </div>
                    <div className=" w-full bg-[#F0F0F0] rounded-[10px] py-[14px] px-[14px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}