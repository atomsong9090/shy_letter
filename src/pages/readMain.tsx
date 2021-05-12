import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import background from "../assets/meteor.gif";

export default function Read(): ReactElement {
  const [letterInfo, setLetterInfo] = useState({ number: "", password: "" });
  console.log(letterInfo);
  const setInformation = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (option === "letternum") {
      setLetterInfo({ ...letterInfo, number: e.target.value });
    } else if (option === "password") {
      setLetterInfo({ ...letterInfo, password: e.target.value });
    }
  };

  return (
    <Main>
      <DescriptionWrapper>
        <Notice>편지번호, 비밀번호를 입력하세요</Notice>
        <MenuBar>
          <Description>편지 번호</Description>
          <SearchContainer>
            <SearchIcon>@</SearchIcon>
            <SearchInput onChange={setInformation("letternum")} placeholder="편지 번호를 입력하세요" />
          </SearchContainer>
        </MenuBar>
        {letterInfo.number ? (
          <PasswordForm>
            <PasswordBox>
              <MenuName>
                비밀번호 :
                <PasswordInput
                  onChange={setInformation("password")}
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </MenuName>
            </PasswordBox>
            {letterInfo.password.length > 3 ? <Button>편지 확인</Button> : null}
          </PasswordForm>
        ) : null}
      </DescriptionWrapper>
    </Main>
  );
}

const Main = styled.div`
  width: 35rem;
  height: 25rem;
  background-color: #d3c6c6;
  margin: 8rem auto;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;
const DescriptionWrapper = styled.div`
  width: 30rem;
  height: 23rem;
`;
const Notice = styled.h1`
  color: white;
  text-align: center;
`;

const MenuBar = styled.div`
  opacity: 0.8;
  background-color: #39ac37;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30rem;
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
  width: 55%;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background-color: black;
`;
const SearchIcon = styled.div`
  font-size: 2rem;
  margin-left: 0.5rem;
  color: #76bfca;
  font-weight: bold;
`;
const PasswordForm = styled.div`
  display: flex;
`;
const PasswordBox = styled.div`
  background-color: white;
  opacity: 0.8;
  width: 18rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  margin: 1rem auto;
  animation: fadein 1.5s;
  -moz-animation: fadein 1.5s; /* Firefox */
  -webkit-animation: fadein 1.5s; /* Safari and Chrome */
  -o-animation: fadein 1.5s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const MenuName = styled.div`
  font-size: 1.3rem;
`;
const PasswordInput = styled.input`
  border: 0;
  height: 2rem;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
const Button = styled.button`
  background-color: skyblue;
  font-size: 1.3rem;
  width: 9rem;
  height: 2.5rem;
  margin-top: 1rem;
  opacity: 0.8;
  border-radius: 0.5rem;
  animation: fadein 1.5s;
  -moz-animation: fadein 1.5s; /* Firefox */
  -webkit-animation: fadein 1.5s; /* Safari and Chrome */
  -o-animation: fadein 1.5s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
