import React from "react";
import styled from "styled-components";
import { myColor, myRed, myHoverRed } from "../color";

const Header = ({ onReset }) => {
  const onClickReset = () => {
    onReset();
  };
  return (
    <HeaderSection>
      <h1>오늘은🗓️</h1>
      <p>{new Date().toDateString()}</p>
      <button onClick={onClickReset}>초기화</button>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  & > h1 {
    margin-bottom: 0px;
  }
  & > p {
    color: ${myColor};
    font-size: 20px;
  }
  & > button {
    cursor: pointer;
    width: 70px;
    height: 40px;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: ${myRed};
    transition: 0.5s;
  }

  & > button:hover {
    background-color: ${myHoverRed};
    transition: 0.5s;
  }

  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export default Header;
