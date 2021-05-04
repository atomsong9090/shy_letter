import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "../components/nav";
import Letter from "../components/letter";
import contents from "../common/ask";

export default function Write(): ReactElement {
  console.log(contents.korean);
  return (
    <Main>
      <NavBar />
      <Container></Container>
    </Main>
  );
}

const Main = styled.div``;
const Container = styled.div`
  background-color: green;
  width: 50rem;
  margin: auto;
  margin-top: 3rem;
  height: 40rem;
`;
const ToLover = styled.div``;
const ToParents = styled.div``;
const ToChild = styled.div``;
const ToFriend = styled.div``;
