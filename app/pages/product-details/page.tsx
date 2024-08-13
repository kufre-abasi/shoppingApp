
import { ProductDetails } from "~/components/Products/productDetails";
import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import ContainLayout from '~/components/Container';

const page = () => {
  return (
    <div className=" bg-[#151515]">
      <ContainLayout>
        <div className="min-h-screen">
          {/* itemId={route.query.id as string}  */}
          <ProductDetails />
        </div>
      </ContainLayout>
    </div>
  );
};

export default page;
