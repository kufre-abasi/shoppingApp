import React from 'react'
import WalletSideBar from '~/components/navs/WalletSideBar';
import WalletNav from '~/components/navs/WalletNav';
import TrendingCard from '~/components/Feeds/TrendingCard';
import AdsCard from '~/components/Feeds/AdsCard'; 
import { ScrollArea } from '../ui/scroll-area';
import ContainLayout from '../Container';
import LayoutContainer from '../LayoutContainer';


interface DefualtLayoutProps {
    children: React.ReactNode;
    
  
  }

const hiveLayout = ({ children }: DefualtLayoutProps) => {
  return (
      <div className="max-h-screen min-h-screen  dark:bg-[#000000] overflow-y-hidden w-full bg-[#FFFFFF]">

      <WalletNav />
  <LayoutContainer >
      <div className=" lg:pt-6 pt-4 w-full gap-10 flex flex-row justify-between ">

      <div className="lg:flex hidden  ">
      <ScrollArea className='h-[80vh] '>

     <div className='lg:flex hidden gap-y-6 flex-col'>
     <WalletSideBar />
          <div className="lg:flex hidden flex-col max-h-screen gap-3">
          {/* <TrendingCard /> */}
          <AdsCard />
        </div>
     </div>
      </ScrollArea>

        </div>


        <div className="md:max-w-[900px] max-w-[100vw] w-full px-4">
          {children}
 
        </div>
     
      </div>
      </LayoutContainer>
    </div>
  );
};

export default hiveLayout;
