import React from 'react'
import SideBar from '~/components/navs/SideBar';
import FeedNav from '~/components/navs/FeedNav';
import TrendingCard from '~/components/Feeds/TrendingCard';
import AdsCard from '~/components/Feeds/AdsCard'; 


interface DefualtLayoutProps {
    children: React.ReactNode;
    
  
  }

const FeedLayout = ({children}:DefualtLayoutProps) => {
  return (
    <div className="max-h-screen min-h-screen dark:bg-[#F9FFE929] overflow-y-hidden w-full bg-[#F4F4F4]">
      <FeedNav />
      <div className="feed_container lg:pt-8 pt-4 w-full gap-24 flex flex-row justify-between ">
        <div className="lg:flex hidden ">
          <SideBar />
        </div>
        <div className=" w-full flex overflow-y-auto max-h-screen hide-scrollbar">
          {children}
        </div>
        <div className="lg:flex hidden flex-col max-h-screen gap-3">
          <TrendingCard />
          <AdsCard />
        </div>
      </div>
    </div>
  );
}

export default FeedLayout
