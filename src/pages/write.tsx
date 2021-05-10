import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/nav";
import contents from "../common/ask";
import btnIcon from "../assets/btnIcon.svg";
import lover from "../assets/lover.jpg";
import parent from "../assets/parent.jpg";
import child from "../assets/child.jpg";
import friend from "../assets/friend.jpg";

export default function Write(): ReactElement {
  const [letterState, setLetterState] = useState("lover");
  const currentLanguage = localStorage.getItem("language");
  function stateHandler() {
    const state: any = document.querySelector(".state");
    setLetterState(state.options[state.selectedIndex].value);
  }

  return (
    <Main>
      <NavBar />
      <Container theme={letterState}>
        <ContainerDescription
          style={
            letterState === "lover"
              ? { backgroundImage: `url(${lover})` }
              : letterState === "parent"
              ? { backgroundImage: `url(${parent})` }
              : letterState === "child"
              ? { backgroundImage: `url(${child})` }
              : { backgroundImage: `url(${friend})` }
          }
        >
          <SelectWraper>
            <SelectState className="state" onChange={stateHandler}>
              {currentLanguage === "korean" ? (
                <>
                  {" "}
                  <option value="lover">To 연인</option>
                  <option value="parent">To 부모님</option>
                  <option value="child">To 자녀</option>
                  <option value="friend">To 친구</option>
                </>
              ) : (
                <>
                  {" "}
                  <option value="lover">To Lover</option>
                  <option value="parent">To Parents</option>
                  <option value="child">To Child</option>
                  <option value="friend">To Friend</option>
                </>
              )}
            </SelectState>
          </SelectWraper>
        </ContainerDescription>
        {currentLanguage === "korean" && letterState === "lover" ? <LetterToLover /> : null}
        {currentLanguage === "korean" && letterState === "parent" ? <LetterToParent /> : null}
      </Container>
    </Main>
  );
}

function LetterToLover(): any {
  return (
    <>
      {contents.korean.lover.map((el: any) => {
        return (
          <ContentChapter key={el.title}>
            <ContentTitle>{el.title}</ContentTitle>
            {el.question
              ? el.question.map((question: any) => {
                  return (
                    <ContentQuestion key={question}>
                      {question}
                      <QuestionInput />
                    </ContentQuestion>
                  );
                })
              : null}
            {el.option
              ? el.option.map((option: any) => {
                  return (
                    <ContentOption key={option[0]}>
                      <Option1>{option[0]}</Option1>
                      <Option2>{option[1]}</Option2>
                    </ContentOption>
                  );
                })
              : null}
          </ContentChapter>
        );
      })}
    </>
  );
}
function LetterToParent(): any {
  return (
    <>
      {contents.korean.parent.map((el: any) => {
        return (
          <ContentChapter key={el.title}>
            <ContentTitle>{el.title}</ContentTitle>
            {el.question
              ? el.question.map((question: any) => {
                  return (
                    <ContentQuestion key={question}>
                      {question}
                      <QuestionInput />
                    </ContentQuestion>
                  );
                })
              : null}
            {el.option
              ? el.option.map((option: any) => {
                  return (
                    <ContentOption key={option[0]}>
                      <Option1>{option[0]}</Option1>
                      <Option2>{option[1]}</Option2>
                    </ContentOption>
                  );
                })
              : null}
          </ContentChapter>
        );
      })}
    </>
  );
}

const Main = styled.div``;
const Container = styled.div`
  border: 4px solid grey;
  width: 50rem;
  margin: auto;
  margin-top: 3rem;
  min-height: 40rem;
`;
const ContainerDescription = styled.div`
  // background-image: url(${lover});
  background-size: cover;
  background-repeat: no-repeat;
  height: 30rem;
`;
const SelectState = styled.select`
  width: 10rem;
  height: 3rem;
  border: 0.3rem solid #ddd;
  appearance: none;
  font-size: 1.5rem;
  background: url(${btnIcon}) no-repeat right 1rem center white;
  --webkit-appearance: none;
  select::-ms-expand {
    opacity: 0;
  }
  :focus {
    outline: none;
  }
`;
const SelectWraper = styled.div``;

const ContentChapter = styled.div`
  background-color: #f7bfdc;
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  padding: 3rem;
  margin-top: 1rem;
`;
const ContentTitle = styled.div`
  font-size: 1.5rem;
`;
const ContentQuestion = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
`;
const QuestionInput = styled.input`
  height: 10rem;
`;

const ContentOption = styled.div`
  display: flex;
`;
const Option1 = styled.div`
  background-color: red;
  width: 8rem;
  height: 2rem;
  border: 1px solid black;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;
const Option2 = styled.div`
  background-color: blue;
  width: 8rem;
  height: 2rem;
  border: 1px solid black;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;
