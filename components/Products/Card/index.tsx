'use client';
import Link from 'next/link';
import FillButton from '~/components/Button/Button';
import { useCartStore } from '~/app/Store/slices/cart';


export const Card = (product: {
  title: string;
  rate: string;
  price: string;
  image: string;
  id: string;
}): JSX.Element => {
   const { cartItems, addToCart, updateCartQuantity } = useCartStore(
     (state) => ({
       cartItems: state.cartItems,
       addToCart: state.addToCart,
       updateCartQuantity: state.updateCartQuantity
     })
   );
     const productInCart = cartItems[product.id];
     const quantity = productInCart?.quantity || 0;

  return (
    <>
      {/* <Link href={`/pages/product-details/${product.id}`} className="w-full"> */}
      <div className="w-full flex h-auto ">
        <div className="min-h-fit w-full overflow-hidden  bg-[#fff] border border-[#3A3434]/8 rounded-[16px]">
          <Link
            href={`/pages/product-details/${product.id}`}
            className="w-full"
          >
            <div className=" bg-[#D9D9D9] overflow-hidden">
              <img
                className="h-[200px] w-full object-cover"
                src={product.image}
                draggable={!!0}
              />
            </div>

            <div className="px-5 py-5 flex flex-col justify-between gap-2 w-full h-auto">
              <div className="w-full flex flex-col gap-y-3 ">
                <h1 className="font-sansMedium capitalize truncate font-[600] text-[15px] leading-[16.2px] text-[#111]">
                  {product.title}
                </h1>
                <div className="">
                  <h1 className="font-sansRegular font-[800] md:text-[17px] text-[12px] leading-[16.2px] text-[#111]">
                    $ {product.price}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                {/* <h1 className="font-sansLight font-[500] text-[12px] leading-[16.2px] text-[#111]">
                Price:
              </h1> */}
              </div>
            </div>
          </Link>

          <div className="flex gap-3 items-center justify-center lg:justify-center">
            {quantity > 0 ? (
              <div className="flex items-center gap-2">
                <FillButton
                  style="border text-sm w-full !rounded-[16px] border-white py-[10px] bg-black text-white px-[27px] font-[450]"
                  onClick={() => updateCartQuantity(product.id, quantity - 1)}
                >
                  -
                </FillButton>
                <span className='text-black'>{quantity}</span>
                <FillButton
                  style="border text-sm w-full !rounded-[16px] border-white py-[10px] bg-black text-white px-[27px] font-[450]"
                  onClick={() => updateCartQuantity(product.id, quantity + 1)}
                >
                  +
                </FillButton>
              </div>
            ) : (
              <FillButton
                style="border text-sm w-full !rounded-[16px] border-white py-[10px] bg-black text-white px-[27px] font-[450]"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </FillButton>
            )}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};
