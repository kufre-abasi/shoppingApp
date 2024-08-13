import React from 'react'
import WalletSideBar from '~/components/navs/WalletSideBar';
import WalletNav from '~/components/navs/WithOutMobileNav';
import TrendingCard from '~/components/Feeds/TrendingCard';
import AdsCard from '~/components/Feeds/AdsCard'; 
import LayoutContainer from '../LayoutContainer';


interface DefualtLayoutProps {
    children: React.ReactNode;
    
  
  }

const WithOutMobileNavLayout = ({ children }: DefualtLayoutProps) => {
  return (
    <div className="max-h-screen min-h-screen dark:bg-[#000000] overflow-y-hidden w-full bg-[#F4F4F4] lg:bg-[#FFFFFF]">
      <WalletNav />
      <LayoutContainer>
      <div className=" lg:pt-6 pt-4 w-full gap-10 flex flex-row justify-between ">
        <div className="lg:flex hidden ">
          <WalletSideBar />
        </div>
        <div className=" w-full flex overflow-y-auto max-h-screen hide-scrollbar">
          {children}
        </div>
        <div className="lg:flex hidden flex-col max-h-screen gap-3">
          {/* <TrendingCard /> */}
          <AdsCard />
        </div>
      </div>
      </LayoutContainer>
    </div>
  );
};

export default WithOutMobileNavLayout;
