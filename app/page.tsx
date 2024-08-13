"use client";

import FillButton from "~/components/Button/Button";
import Carousel from "~/components/carousel";
import ContainLayout from "../components/Container";
import { ProductGrid } from "~/components/Products/ProductGrid";
export default function Home() {


  return (
    <main className="hero-banner xl:min-h-screen  text-center lg:text-start  md:py-16 md:pb-28 py-6 text-white bg-[#151515]">
      <ContainLayout>
        <div className="flex  flex-col items-center justify-between">
          <div className="rounded-lg w-full ">
            <div className="flex flex-col gap-9 md:gap-y-12">
              <div className="flex flex-col lg:text-center text-center gap-y-2 ">
                <div className="font-gooper leading-8 text-center  font-bold text-[26px] flex-col md:text-6xl flex lg:justify-center py-3 items-center lg:items-center">
                  <div className=" gap-2 ">
                    <span className="  ">
                      {' '}
                      Welcome to shoppingApp where you{' '}
                    </span>
                    shop everything.{' '}
                  </div>
                </div>
                <p className="md:text-lg text-[13px] lg:w-[50%] mx-auto text-center  justify-center lg:text-center font-medium ">
                  shoppingApp is a platform that connects you with the right,
                  resources and tools to help you grow your business.
                </p>
              </div>
              <div className="flex gap-3 items-center justify-center lg:justify-center">
                <FillButton style="border text-sm border-white text-white py-[10px]  px-[27px] font-[450] rounded-[6px]">
                  Shop Now{' '}
                </FillButton>
              </div>
            </div>
          </div>
          <ProductGrid />
          {/* <div className="rounded-lg  mt-8">
            <ProductGrid />
          </div> */}
        </div>
      </ContainLayout>
    </main>
  );
}
