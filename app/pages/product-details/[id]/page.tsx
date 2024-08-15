'use client'; // This marks the component as a Client Component

import { ProductDetails } from '~/components/Products/productDetails';
import React, { useEffect } from 'react';
import ContainLayout from '~/components/Container';
import { useProductsStore } from '~/app/Store/slices/product';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '~/components/ui/icons/HomeIcon';

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
        <div className="min-h-screen pt-10">
          <Link
            href={`/`}
            className="text-sm font-[400] w-fit   p-2 rounded-2xl flex items-center gap-2 text-white dark:text-[rgba(62,62,62,1)] bg-[#eaeaea] dark:bg-[#2d2d2d]"
          >
            <HomeIcon />
            <span className="text-black dark:text-white"> Home</span>
          </Link>

          <ProductDetails params={params} />
        </div>
      </ContainLayout>
    </div>
  );
};

export default page;
