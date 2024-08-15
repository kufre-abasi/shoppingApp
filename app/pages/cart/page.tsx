'use client';
import React, { useMemo } from 'react';
import { useCartStore } from '~/app/Store/slices/cart';
import FillButton from '~/components/Button/Button';
import ContainLayout from '~/components/Container';
import Link from 'next/link';
import HomeIcon from '~/components/ui/icons/HomeIcon';
const CartPage = (): JSX.Element => {
       const { cartItems, addToCart, updateCartQuantity } = useCartStore(
         (state) => ({
           cartItems: state.cartItems,
           addToCart: state.addToCart,
           updateCartQuantity: state.updateCartQuantity
         })
       );

  // Calculate the subtotal
  const subtotal = useMemo(() => {
    return Object.values(cartItems).reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  // Discounts can be applied here (e.g., fixed or percentage)
  const discount = useMemo(() => {
    // Example: 10% off
    const percentageDiscount = 0.1; // 10% discount
    return subtotal * percentageDiscount;
  }, [subtotal]);

  const totalPrice = subtotal - discount;

  return (
    <ContainLayout>
      <div className="mt-8">
        <Link
          href={`/`}
          className="text-sm font-[400] w-fit   p-2 rounded-2xl flex items-center gap-2 text-white dark:text-[rgba(62,62,62,1)] bg-[#eaeaea] dark:bg-[#2d2d2d]"
        >
          <HomeIcon />
          <span className="text-black dark:text-white"> Home</span>
        </Link>

        <h1 className="text-2xl font-bold text-white my-4">Your Cart</h1>
        {Object.keys(cartItems).length === 0 ? (
          <p className="!text-white">Your cart is empty.</p>
        ) : (
          <div className="flex lg:flex-row flex-col gap-6 w-full">
            {/* List of Cart Items */}
            <div className="space-y-4 w-full">
              {Object.values(cartItems).map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex lg:flex-row flex-col gap-4 justify-between items-center p-4 bg-gray-100 rounded-md"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 mx-4">
                    <h2 className="font-bold">{product.title}</h2>
                    <p>${product.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-md"
                      onClick={() =>
                        updateCartQuantity(product.id, quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-md"
                      onClick={() =>
                        updateCartQuantity(product.id, quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    <FillButton
                      onClick={() => updateCartQuantity(product.id, 0)}
                      style="border text-sm w-full !rounded-md border-white text-red-500 py-2 bg-red-100  px-2 font-semibold"
                    >
                      Remove
                    </FillButton>
                  </div>

                  {/* <button
                    className="ml-4 text-red-500"
                    onClick={() => updateCartQuantity(product.id, 0)}
                  >
                    Remove
                  </button> */}
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-[30%] w-full">
              {' '}
              <div className=" p-4 bg-gray-100  rounded-md">
                <h2 className="text-xl font-bold">Cart Summary</h2>
                <div className="flex justify-between mt-4">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p>Discount</p>
                  <p>-${discount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mt-2 font-bold">
                  <p>Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="mt-4">
                  <FillButton style="border text-sm w-full !rounded-md border-white py-2 bg-black text-white px-4 font-semibold">
                    Proceed to Checkout
                  </FillButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ContainLayout>
  );
};

export default CartPage;
