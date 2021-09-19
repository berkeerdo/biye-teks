import React from "react";
import styled from "styled-components";
import BiyeteksLogo from "../../assets/Biyeteks-Logo.svg";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  cursor: pointer;
`;

const LogoImg = styled.div`
  width: 140px;
  height: 140px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href= "#">
        <LogoImg>
          <img src={BiyeteksLogo} alt="Biyeteks Logo" />
        </LogoImg>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
