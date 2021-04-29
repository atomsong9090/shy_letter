import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBar from "../components/nav";

export default function Main(): ReactElement {
  return (
    <MainScreen>
      <NavBar />
    </MainScreen>
  );
}
const MainScreen = styled.div``;
