import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: auto;
  list-style: none;
  width: 100%;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1em;
  color: black;
  font-weight: 500;
  font-size: 13px;
  justify-content: center;
  display: flex;
  border-bottom: 1px solid transparent;
  transition: all 200ms ease-in-out;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;

  &:hover {
    color: black;
  }
`;

const MobileNavLinks = () => {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">Hakkımızda</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">İletişim</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
};

export default MobileNavLinks;
