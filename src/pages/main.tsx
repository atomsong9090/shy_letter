import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "../components/nav";
import Intro from "../components/intro";

export default function Main(): ReactElement {
  return (
    <MainScreen>
      <NavBar />
      <Intro />
    </MainScreen>
  );
}
const MainScreen = styled.div``;
