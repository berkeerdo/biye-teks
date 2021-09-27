import React from 'react'
import { useMediaQuery } from "react-responsive";
import MobileProduct from './mobileProduct';
import Product from './product';


const Productmain = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      {!isTabletOrMobile && <Product/>}
      {isTabletOrMobile && <MobileProduct/>}
    </>
  )
}

export default Productmain
