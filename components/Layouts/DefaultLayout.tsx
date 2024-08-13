import React from 'react'
import TopNavbar from '../navs/Top_navbar'
import Footer from '../navs/Footer'


interface DefualtLayoutProps {
    children: React.ReactNode;
    
  
  }
const DefaultLayout = ({children}:DefualtLayoutProps) => {

  return (
    <>
         <TopNavbar />
         <div>
            {children}
         </div>
         {/* <Footer /> */}
    </>
  )
}

export default DefaultLayout
