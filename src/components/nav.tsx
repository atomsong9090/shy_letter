import React, { ReactElement } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useHistory } from "react-router-dom";
import globe from "../assets/globe.svg";

export default function NavBar(): ReactElement {
  const history = useHistory();
  const languageSet = localStorage.getItem("language");
  if (!languageSet) {
    localStorage.setItem("language", "korean");
    window.location.reload();
  }

  function openModal() {
    const modal: any = document.querySelector(".modal");
    if (modal.style.display === "none") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
  }

  function changeLanguage(language: string) {
    const currentLanguage = localStorage.getItem("language");
    if (language === "korean" && currentLanguage !== "korean") {
      localStorage.setItem("language", "korean");
      window.location.reload();
    } else if (language === "english" && currentLanguage !== "english") {
      localStorage.setItem("language", "english");
      window.location.reload();
    }
  }

  return (
    <Main>
      <Logo src={logo} onClick={() => history.push("/")} />
      <MenuBox>
        <MenuWrapper>
          <MenuItem onClick={() => history.push("/write")}>{languageSet === "korean" ? "편지쓰기" : "Write"}</MenuItem>
        </MenuWrapper>
        <MenuWrapper>
          <MenuItem>{languageSet === "korean" ? "편지읽기" : "Read"}</MenuItem>
        </MenuWrapper>
        <MenuWrapper>
          <MenuItem>{languageSet === "korean" ? "받은편지" : "Inbox"}</MenuItem>
        </MenuWrapper>
      </MenuBox>
      <LanBox onClick={openModal}>
        <GlobeImg src={globe} /> 한국어
        <LanguageModal className="modal" style={{ display: "none" }}>
          <ModalOption onClick={() => changeLanguage("korean")}>한국어</ModalOption>
          <ModalOption onClick={() => changeLanguage("english")}>Enlglish</ModalOption>
        </LanguageModal>
      </LanBox>
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
  // border-bottom: 0.13rem solid #b8b2b2;
`;

const Logo = styled.img`
  //background-color: yellow;
  width: 15rem;
  margin-left: 3%;
`;
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //  background-color: blue;
  width: 70%;
  height: 60%;
`;
const MenuWrapper = styled.div`
  padding: 2%;
  //border: 1px solid black;
`;
const MenuItem = styled.div`
  font-size: 150%;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;
const LanBox = styled.div`
  width: 10%;
  height: 60%;
  display: flex;
  align-items: center;
`;

const GlobeImg = styled.img`
  width: 2rem;
`;

const LanguageModal = styled.div`
  position: absolute;
  background-color: red;
  flex-direction: column;
  width: 8rem;
  height: 5rem;
  margin-top: 7.5rem;
`;

const ModalOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
  height: 50%;
`;
