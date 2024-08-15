import { use, useCallback, useEffect, useMemo, useState } from "react";
import FillButton from '~/components/Button/Button';
import { useProductsStore } from '~/app/Store/slices/product';
import { useCartStore } from '~/app/Store/slices/cart';

interface ItemProps {
  itemId: string;
}

export const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { singleProductData } = useProductsStore((state) => ({
    singleProductData: state.singleProductData
  }));
  const { cartItems, addToCart, updateCartQuantity } = useCartStore(
    (state) => ({
      cartItems: state.cartItems,
      addToCart: state.addToCart,
      updateCartQuantity: state.updateCartQuantity
    })
  );
  const productInCart = cartItems[params.id];
  const quantity = productInCart?.quantity || 0;

  return (
    <>
      <>
        <div>
          <div className="font-sansMedium flex flex-col gap-[16px] h-full mt-20">
            <h4 className="text-[#fff] lg:px-0 px-6 text-[20px] font-semibold">
              Product Details
            </h4>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[60px] ">
              <div>
                <div className="w-full bg-white rounded-3xl overflow-hidden object-contain h-[60vh]">
                  <img
                    className="h-full w-full object-cover"
                    src={singleProductData?.image}
                    draggable={!!0}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-around">
                <div>
                  <h3 className="text-[#fff] text-3xl font-satoshi">
                    {singleProductData?.title}
                  </h3>
                  <p className="text-white mt-3 text-base">
                    {singleProductData?.description}
                  </p>
                </div>
                {/* <div className="flex gap-3 items-center justify-center lg:justify-center">
                  <FillButton style="border text-sm w-full border-white py-[10px] text-white px-[27px] font-[450] rounded-[6px]">
                    Add to cart{' '}
                  </FillButton>
                </div> */}
                <div className="flex gap-3 items-center justify-center lg:justify-center">
                  {quantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <FillButton
                        style="border text-sm w-full !rounded-[16px] border-white py-[10px] bg-black text-white px-[27px] font-[450]"
                        onClick={() =>
                          updateCartQuantity(params.id, quantity - 1)
                        }
                      >
                        -
                      </FillButton>
                      <span className="text-white">{quantity}</span>
                      <FillButton
                        style="border text-sm w-full !rounded-[16px] border-white py-[10px] bg-black text-white px-[27px] font-[450]"
                        onClick={() =>
                          updateCartQuantity(params.id, quantity + 1)
                        }
                      >
                        +
                      </FillButton>
                    </div>
                  ) : (
                  <FillButton style="border text-sm w-full border-white py-[10px] text-white px-[27px] font-[450] rounded-[6px]"
                      onClick={() => addToCart(params)}
                    >
                      Add to cart
                    </FillButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
