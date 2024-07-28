/* eslint-disable array-callback-return */
import React, { useEffect, useReducer, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import styled from "styled-components";

const todos_Reducer = (todos, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          content: action.content,
          date: new Date().toLocaleDateString(),
          isDone: false,
        },
      ];
    }
    case "deleted": {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case "checked": {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      });
    }
    case "reset": {
      return [];
    }
    default: {
      throw Error("Unknown action " + action.type);
    }
  }
};

const initialTodos = () => {
  if (window.localStorage.getItem("todos")) {
    return JSON.parse(window.localStorage.getItem("todos"));
  } else return [];
};

const forIdRef = () => {
  if (window.localStorage.getItem("todos")) {
    return JSON.parse(window.localStorage.getItem("todos")).length;
  }
};

const App = () => {
  const idRef = useRef(forIdRef());
  const [todos, dispatch] = useReducer(todos_Reducer, null, initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onCreate = (content) => {
    dispatch({
      type: "added",
      id: idRef.current++,
      content: content,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "deleted",
      id: targetId,
    });
  };

  const onCheck = (targetId) => {
    dispatch({
      type: "checked",
      id: targetId,
    });
  };

  const onReset = () => {
    dispatch({
      type: "reset",
    });
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
