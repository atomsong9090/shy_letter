import React, { ReactElement } from "react";
import styled from "styled-components";

export default function Letter(props: any): ReactElement {
  const { title } = props;

  return <Main>{title}</Main>;
}

const Main = styled.div`
  background-color: white;
  width: 50%;
  margin: auto;
  margin-top: 3rem;
  border: 0.1rem solid black;
`;
