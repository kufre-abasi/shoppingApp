import { use, useCallback, useEffect, useMemo, useState } from "react";
import FillButton from '~/components/Button/Button';

interface ItemProps {
  itemId: string;
}

export const ProductDetails: React.FC = ({  }) => {

  return (
    <>
      <>
        <div>
          <div className="font-sansMedium flex flex-col gap-[16px] h-full ">
            <h4 className="text-[#000000] lg:px-0 px-6 text-[20px] font-semibold">
              Product Details
            </h4>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-[56px] gap-[60px] mt-5">
              <div>
                <div className="w-full bg-white rounded-3xl h-[60vh]">l</div>
              </div>
              <div className="flex flex-col justify-around">
                <h3 className="text-[#fff] text-3xl font-satoshi">
                  Unisex denim sherpa jacket
                </h3>
                <div className="flex gap-3 items-center justify-center lg:justify-center">
                  <FillButton style="border text-sm w-full border-white py-[10px] text-white px-[27px] font-[450] rounded-[6px]">
Add to cart                  </FillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
