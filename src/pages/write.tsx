import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/nav";
import Letter from "../components/letter";
import contents from "../common/ask";
import btnIcon from "../assets/btnIcon.svg";

export default function Write(): ReactElement {
  const [letterState, setLetterState] = useState("#e08392");
  function stateHandler() {
    const state: any = document.querySelector(".state");
    setLetterState(state.options[state.selectedIndex].value);
  }
  console.log(contents.korean);
  return (
    <Main>
      <NavBar />
      <Container theme={letterState}>
        <SelectWraper>
          <SelectState className="state" onChange={stateHandler}>
            <option value="pink">To 연인</option>
            <option value="blue">To 부모님</option>
            <option value="yellow">To 자녀</option>
            <option value="red">To 친구</option>
          </SelectState>
        </SelectWraper>
      </Container>
    </Main>
  );
}

const Main = styled.div``;
const Container = styled.div`
  border: 4px solid grey;
  width: 50rem;
  margin: auto;
  margin-top: 3rem;
  height: 40rem;
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
