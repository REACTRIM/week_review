import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
const TestList = [
  { id: -1, content: "하이", date: "2024.7.23" },
  { id: 0, content: "바이", date: "2024.7.22" },
];
const DayList = ["Mon"];
export default function TodoList() {
  const [todos, setTodos] = useState(TestList);
  const [addContent, setAddContent] = useState("");
  const [currentId, setCurrentId] = useState(1);
  const [searchingTodos, setSearchingTodos] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const onAddChange = (e) => {
    setAddContent(e.target.value);
  };
  const onSubmit = () => {
    setTodos([
      ...todos,
      {
        id: currentId,
        content: addContent,
        date: dayjs(new Date()).format("YYYY.MM.DD"),
      },
    ]);
    setCurrentId((prev) => prev + 1);
    setAddContent("");
  };
  const onDeleteClick = (e) => {
    setTodos(
      todos.filter((el) => {
        return el.id !== Number(e.target.id);
      })
    );
  };
  const onSearchChange = (e) => {
    var word = e.target.value;
    word.length > 0 ? setIsSearching(true) : setIsSearching(false);
    setSearchingTodos(
      todos.filter((el) => {
        if (word.length === 0) return false;
        var returnBool = true;
        [...word].map((w, i) => {
          if ([...el.content][i] !== w) returnBool = false;
        });
        return returnBool;
      })
    );
  };
  return (
    <Wrapper>
      <InputBox>
        <TodoInput
          value={addContent}
          onChange={onAddChange}
          type="text"
          placeholder="새로운 Todo..."
        />
        <TodoSubmit onClick={onSubmit}>추가</TodoSubmit>
      </InputBox>
      <TodoListContainer>
        <div className="title">Todo List🌱</div>
        <SearchBox
          onChange={onSearchChange}
          type="text"
          placeholder="검색어를 입력하세요"
          // value={searchWord}
        />
        {isSearching ? null : (
          <ListContainer>
            {todos.map((el, key) => (
              <ListBox key={key}>
                <div className="div1">
                  <input type="checkbox" />
                  {el.content}
                </div>
                <div className="div1">
                  {el.date}
                  <button id={el.id} onClick={onDeleteClick}>
                    삭제
                  </button>
                </div>
              </ListBox>
            ))}
          </ListContainer>
        )}
        {isSearching ? (
          <ListContainer>
            {searchingTodos.map((el, key) => (
              <ListBox key={key}>
                <div className="div1">
                  <input type="checkbox" />
                  {el.content}
                </div>
                <div className="div1">
                  {el.date}
                  <button id={el.id} onClick={onDeleteClick}>
                    삭제
                  </button>
                </div>
              </ListBox>
            ))}
          </ListContainer>
        ) : null}
      </TodoListContainer>
    </Wrapper>
  );
}
const ListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid rgb(230, 230, 230);
  .div1 {
    display: flex;
    gap: 20px;
    align-items: center;
    button {
      border: none;
      color: gray;
      padding: 5px 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SearchBox = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  height: 50px;
  &:focus {
    outline: none;
    border-bottom: 1px solid #2493fc;
  }
`;

const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 700;
    margin-bottom: 50px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TodoInput = styled.input`
  border: 1px solid #d8d1df;
  padding: 0 10px;
  width: 80%;
  height: 40px;
`;
const TodoSubmit = styled.div`
  background-color: #2593ff;
  border: none;
  border-radius: 5px;
  color: white;
  height: 40px;
  width: 15%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
