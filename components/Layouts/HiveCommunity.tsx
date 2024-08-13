import React from "react";
import WalletSideBar from "~/components/navs/WalletSideBar";
import WalletNav from '~/components/navs/WithOutMobileNav';
import TrendingCard from "~/components/Feeds/TrendingCard";
import AdsCard from "~/components/Feeds/AdsCard";
import { ScrollArea } from "../ui/scroll-area";
import LayoutContainer from "../LayoutContainer";

interface DefualtLayoutProps {
  children: React.ReactNode;
}

const HiveCommunity = ({ children }: DefualtLayoutProps) => {
  return (
    <div className="max-h-screen min-h-screen dark:bg-[#000000] overflow-y-hidden w-full bg-[#FFFFFF]">
      <WalletNav />
      <LayoutContainer>
      <div className=" lg:pt-6 pt-4 w-full gap-10 flex flex-row justify-between ">
        <div className="lg:flex hidden  ">
          <div className="lg:flex hidden gap-y-6 flex-col">
            <WalletSideBar />
          </div>
        </div>

        <div className=" w-full  hide-scrollbar">{children}</div>
      </div>
      </LayoutContainer>
    </div>
  );
};

export default HiveCommunity;
