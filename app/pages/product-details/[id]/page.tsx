'use client'; // This marks the component as a Client Component

import { ProductDetails } from '~/components/Products/productDetails';
import React, { useEffect } from 'react';
import ContainLayout from '~/components/Container';
import { useProductsStore } from '~/app/Store/slices/product';
import { useRouter, usePathname } from 'next/navigation';

const page = ({ params }: { params: { id: string } }) => {
  const { singleProductData, fetchSingleProducts } = useProductsStore(
    (state) => ({
      singleProductData: state.singleProductData,
      fetchSingleProducts: state.fetchSingleProducts
    })
  );
  const route = useRouter();

  useEffect(() => {
    fetchSingleProducts(params.id);
  }, []);

  return (
    <div className=" bg-[#151515]">
      <ContainLayout>
        <div className="min-h-screen">
          {/* itemId={route.query.id as string}  */}
          {/* data: string; data: string; */}
          <ProductDetails params={params} />
        </div>
      </ContainLayout>
    </div>
  );
};

export default page;
