import React, { ReactElement } from "react";
import styled from "styled-components";

import Intro from "../components/intro";

export default function Main(): ReactElement {
  return (
    <MainScreen>
      <Intro />
    </MainScreen>
  );
}
const MainScreen = styled.div``;
