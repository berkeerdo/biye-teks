import React from 'react'
import { useMediaQuery } from "react-responsive";
import FooterLinks from './links'
import FooterMobileLinks from './mobilelinks'

const Footer = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 655px)' })

  return (
    <>
      {!isTabletOrMobile && <FooterLinks/>}
      {isTabletOrMobile && <FooterMobileLinks/>}
    </>
  )
}

export default Footer
