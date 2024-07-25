/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import styled from "styled-components";

const App = () => {
  const idRef = useRef(0);
  const [todos, setTodos] = useState(
    window.localStorage.getItem("todos")
      ? JSON.parse(window.localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    if (todos) {
      const arrTodos = JSON.stringify(todos);
      window.localStorage.setItem("todos", arrTodos);
    }
  }, [todos]);

  const onCreate = (content) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: content,
        date: new Date().toLocaleDateString(),
        isDone: false,
      },
    ]);
  };

  const onDelete = (targetId) => {
    return setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onCheck = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      })
    );
  };

  const onReset = () => {
    setTodos([]);
  };

  return (
    <Wrapper>
      <Header onReset={onReset} />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onCheck={onCheck} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
`;

export default App;
