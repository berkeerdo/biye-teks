import styled from "styled-components";
import React from "react";
import Logo from "../logo/index";
import AppBarNav from "./Appbar.jsx";
import { useMediaQuery } from "react-responsive";
import MobileAppBarNav from "./mobileAppbar";

const LogoContainer = styled.div`
  width: auto;
  height: 60px;
  background-color: #d3d0cb;
  border-bottom: solid black 1px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 100;
  justify-content: center;
`;

const Navbar = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {!isMobile && <AppBarNav/>}
      {isMobile && <MobileAppBarNav/>}
    </>
  );
};

export default Navbar;
