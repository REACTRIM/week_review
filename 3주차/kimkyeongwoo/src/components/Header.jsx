import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <DateSection>
      <h3>오늘은</h3>
      <div>{new Date().toDateString()}</div>
    </DateSection>
  );
};

const DateSection = styled.div`
  display: flex
  flex-direction: column;
`;

export default Header;
