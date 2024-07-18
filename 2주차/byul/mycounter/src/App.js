import styled from "styled-components";
import MyButtons from "./components/my-buttons";
import MyCounter from "./components/my-counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    if (e.target.value === "0") {
      setCount(0);
      return;
    }
    setCount((prev) => prev + Number(e.target.value));
  };
  return (
    <Wrapper>
      <h1>Simple Counter</h1>
      <MyCounter count={count} />
      <MyButtons onClick={handleClick} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    width: 30%;
  }
`;
