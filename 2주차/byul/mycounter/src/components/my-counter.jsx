import styled from "styled-components";

const MyCounter = ({ count }) => {
  return (
    <Wrapper>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </Wrapper>
  );
};

export default MyCounter;

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 30%;
  padding: 20px;
`;
