import React from 'react'
import About from './about'
import { useMediaQuery } from "react-responsive";
import MobileAbout from './mobileAbout';

const MainAbout = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      {!isTabletOrMobile && <About/>}
      {isTabletOrMobile && <MobileAbout/>}
    </>
  )
}

export default MainAbout
