import { use, useCallback, useEffect, useMemo, useState } from 'react';
import {Card} from '../Card';
export const ProductGrid: React.FC = ({  }) => {
  return (
    <>
      <>
        <div className="w-full">
          <div className="font-sansMedium flex flex-col gap-[16px] h-full mt-[30px] ">
            <h4 className="text-[#000000] lg:px-0 px-6 text-[20px] font-semibold">
              Product Details
            </h4>
          </div>
          <div className='grid lg:grid-cols-4 grid-cols-1 lg:mt-[56px] gap-[40px] mt-5'>
            {[...Array(8)].map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </>
    </>
  );
};
