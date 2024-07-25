import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const List = ({ todos, onToggle, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterdTodos = () => {
    if (search === "") return todos;
    else
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase())
      );
  };

  return (
    <ListSection>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      {filterdTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ListSection>
  );
};

const ListSection = styled.div`
  & > input {
    border: none;
    border-bottom: 1px solid;
    padding: 10px;
  }

  display: flex;
  flex-direction: column;
`;

export default List;
