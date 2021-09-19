import styled from "styled-components";
import React from "react";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./navLinks.jsx";
import { DeviceSize } from "../responsive";
import Logo from "../logo/index";
// import MobileNavLinks from "./mobileNavLinks.jsx";
import Dropdowntoggle from "./dropdownToggle.jsx";

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

const NavBarContainer = styled.div`
  width: auto;
  height: 55px;
  background-color: #d3d0cb;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 100;
  justify-content: center;
`;
const NavBarContainerRes = styled.div`
  width: auto;
  height: 55px;
  background-color: #d3d0cb;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 100;
  justify-content: space-between;
`;

const MiddleSection = styled.div`
  display: flex;
  height: auto;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {!isMobile && (
        <NavBarContainer>
          <MiddleSection>
            {!isMobile && <NavLinks />}
          </MiddleSection>
        </NavBarContainer>
      )}
      {isMobile && (
        <NavBarContainerRes>
          <Section>
            {isMobile && <Dropdowntoggle/>}
          </Section>
        </NavBarContainerRes>
      )}
    </>
  );
};

export default Navbar;
