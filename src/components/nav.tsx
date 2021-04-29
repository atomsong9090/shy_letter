import React, { ReactElement } from "react";
import styled from "styled-components";

export default function NavBar(): ReactElement {
  return (
    <Main>
      <LogoBox>LOGO</LogoBox>
      <MenuBox>
        <MenuWrapper>
          <MenuItem>편지 쓰기</MenuItem>
        </MenuWrapper>
        <MenuWrapper>
          <MenuItem>편지 읽기</MenuItem>
        </MenuWrapper>
        <MenuWrapper>
          <MenuItem>편지 쓰기</MenuItem>
        </MenuWrapper>
      </MenuBox>
      <LanBox>dd</LanBox>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8rem;
`;

const LogoBox = styled.div`
  background-color: yellow;
  width: 15%;
  margin-left: 3%;
  height: 60%;
`;
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  width: 70%;
  height: 60%;
`;
const MenuWrapper = styled.div`
  padding: 2%;
  border: 1px solid black;
`;
const MenuItem = styled.div`
  font-size: 150%;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;
const LanBox = styled.div`
  background-color: red;
  width: 10%;
  height: 60%;
`;
