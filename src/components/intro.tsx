import React, { ReactElement } from "react";
import styled from "styled-components";
import background from "../assets/intro.png";

export default function Intro(): ReactElement {
  return (
    <Main>
      <IntroBox>
        <SearchBar>
          <Description>편지 번호로 조회</Description>
          <SearchContainer>
            <SearchIcon>@</SearchIcon>
            <SearchInput placeholder="편지 번호를 입력하세요" />
          </SearchContainer>
        </SearchBar>
        <Introduce>
          편지로 당신의 마음을 전하세요
          <Br />
          간편편지 레터유
        </Introduce>
        <Intro_Description>
          설명을 참고하면 누구나 간편하게 편지 작성이 가능합니다.
          <Br />
          글씨, 양식 걱정 하지마세요, 진심만 준비하세요 :)
        </Intro_Description>
        <StartBtn>무료로 편지쓰기</StartBtn>
      </IntroBox>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 3rem;
  height: 30rem;
  display: flex;
  justify-content: center;
`;
const IntroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBar = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 35rem;
  height: 3.5rem;
  border-radius: 2rem;
`;
const Description = styled.div`
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
`;
const SearchInput = styled.input`
  border-radius: 2rem;
  border: 0;
  display: flex;
  text-align: center;
  font-size: 1.2rem;
  :focus {
    outline: none;
  }
`;
const SearchContainer = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background-color: white;
`;
const SearchIcon = styled.div`
  font-size: 2rem;
  margin-left: 0.5rem;
  color: #39ac37;
  font-weight: bold;
`;

const Introduce = styled.h1`
  font-size: 4rem;
  margin: 0;
  margin-top: 1rem;
  display: flex;
  text-align: center;
`;
const Br = styled.br``;
const Intro_Description = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
`;

const StartBtn = styled.button`
  background-color: #39ac37;
  border: 0;
  height: 3rem;
  font-size: 1.3rem;
  width: 12rem;
  color: white;
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
