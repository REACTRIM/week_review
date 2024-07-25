import React from "react";
import styled from "styled-components";
import { myRed, myHoverRed, myGreen, myHoverGreen } from "../color";

const TodoItem = ({ id, content, date, isDone, onDelete, onCheck }) => {
  const onClickDelete = () => {
    onDelete(id);
  };

  const onChangeCheckbox = () => {
    onCheck(id);
  };
  return (
    <div>
      <TodoItemSection isDone={isDone}>
        <input
          checked={isDone}
          value={isDone}
          type="checkbox"
          onChange={onChangeCheckbox}
        ></input>
        <Todo>{content}</Todo>
        <AddedDate>{date}</AddedDate>
        <button onClick={onClickDelete}>삭제</button>
      </TodoItemSection>
    </div>
  );
};

const TodoItemSection = styled.div`
  & > button {
    cursor: pointer;
    height: 40px;
    width: 50px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: ${(props) => (props.isDone ? myGreen : myRed)};
    transition: 0.5s;
  }

  & > button:hover {
    background-color: ${(props) => (props.isDone ? myHoverGreen : myHoverRed)};
  }

  display: flex;
  height: 80px;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const Todo = styled.p`
  flex: 1;
`;

const AddedDate = styled.p``;

export default TodoItem;
