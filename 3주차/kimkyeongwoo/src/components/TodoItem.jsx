import React from "react";
import styled from "styled-components";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const onChangeCheckbox = () => {
    onToggle(todo.id);
  };

  const onClickDelete = () => {
    onDelete(todo.id);
  };
  return (
    <div>
      <Items>
        <input
          checked={todo.isDone}
          onChange={onChangeCheckbox}
          type="checkbox"
        ></input>
        <span>{todo.content}</span>
        <p>{todo.date}</p>
        <button onClick={onClickDelete}>삭제</button>
      </Items>
    </div>
  );
};

const Items = styled.div`
  & > span {
    flex: 1;
  }

  display: flex;
  gap: 20px;
  align-items: center;
`;

export default TodoItem;
