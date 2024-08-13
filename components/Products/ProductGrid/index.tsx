import { use, useCallback, useEffect, useMemo, useState } from 'react';
import {Card} from '../Card';
import { useProductsStore } from '~/app/Store/slices/product';

export const ProductGrid: React.FC = ({  }) => {
  const { products, fetchProducts } = useProductsStore((state) => ({
    products: state.products,
    fetchProducts: state.fetchProducts
  }));

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <>
        <div className="w-full">
          <div className="font-sansMedium flex flex-col gap-[16px] h-full mt-[30px] ">
            <h4 className="text-[#fff] lg:px-0 px-6 text-[20px] font-semibold">
             Our Products
            </h4>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-[56px] gap-[40px] mt-5">
            {products?.map((product: any) => (
              <Card
                key={product.id}
                title={product.title}
                rate={product.rate}
                price={product.price}
                id={product.id}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </>
    </>
  );
};
