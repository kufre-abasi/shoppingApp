'use client';
import Link from 'next/link';


export const Card = (data: {
  title?: string;
  rate?: string;
  price?: string;
  author?: string;
  image?: string;
  id?: string;
  seller?: `0x${string}`;
}) => {

  return (
    <>
      <Link href={`/pages/product-details`} className="w-full">
        <div className="w-full flex h-auto ">
          <div className="min-h-fit w-full overflow-hidden  bg-[#fff] border border-[#3A3434]/8 rounded-[16px]">
            <div className=" bg-[#D9D9D9] overflow-hidden">
              ll
              {/* <img
                className="h-[200px] w-full object-cover"
                src={data.image}
                alt={data.author}
                draggable={!!0}
              /> */}
            </div>

            <div className="px-5 py-5 flex flex-col justify-between gap-2 w-full h-auto">
              <div className="w-full flex flex-col gap-y-3 ">
                <h1 className="font-sansMedium capitalize truncate font-[600] text-[15px] leading-[16.2px] text-[#111]">
                  {/* {data.title} */}
                  test
                </h1>
                <div className="">
                  <h1 className="font-sansRegular font-[800] md:text-[17px] text-[12px] leading-[16.2px] text-[#111]">
                    {/* {Number(data.price as any).toFixed(2)}{' '} */}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                {/* <h1 className="font-sansLight font-[500] text-[12px] leading-[16.2px] text-[#111]">
                Price:
              </h1> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
