import styled from "styled-components";

const MyButtons = ({ onClick }) => {
  const values = [-1, -10, -100, 100, 10, 1];
  return (
    <Wrapper>
      {values.map((el, key) => (
        <button key={key} onClick={onClick} value={el}>
          {el}
        </button>
      ))}
      <button onClick={onClick} value={0}>
        reset
      </button>
    </Wrapper>
  );
};

export default MyButtons;

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 30%;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  button {
    width: 10rem;
    background-color: black;
    padding: 5px 10px;
    color: white;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: red;
      border: none;
    }
    &:active {
      scale: 0.9;
    }
  }
`;
