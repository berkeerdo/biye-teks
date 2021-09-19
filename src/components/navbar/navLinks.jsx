import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 3.5em;
  color: black;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 1px solid transparent;
  transition: all 200ms ease-in-out;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;

  &:hover {
    color: black;
  }
`;

const index = () => {

  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">Hakkımızda</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Biye Ürünleri</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Tela Ürünleri</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">İletişim</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
};

export default index;
