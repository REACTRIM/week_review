import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const List = ({ todos, onDelete, onCheck }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const FilteredData = () => {
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <ListSection>
      <SearchBar
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></SearchBar>
      {FilteredData().map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          date={todo.date}
          isDone={todo.isDone}
          onDelete={onDelete}
          onCheck={onCheck}
        ></TodoItem>
      ))}
    </ListSection>
  );
};

const ListSection = styled.div``;

const SearchBar = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid;
  outline: none;
`;

export default List;
