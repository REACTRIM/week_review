import styled from "styled-components";
import DateBox from "./datebox";
import TodoList from "./todo-list";

function App() {
  return (
    <Wrapper>
      <DateBox />
      <TodoList />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
