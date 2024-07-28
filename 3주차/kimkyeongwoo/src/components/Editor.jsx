import React, { useState, useRef } from "react";
import styled from "styled-components";
import { myColor, myHoverColor } from "../color";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickAddition = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickAddition();
    }
  };

  return (
    <EditorSection>
      <input
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="추가할 Todos..."
      ></input>
      <button onClick={onClickAddition}>추가</button>
    </EditorSection>
  );
};

const EditorSection = styled.div`
  display: flex;
  gap: 20px;

  & > input {
    padding: 5px;
    flex: 1;
    height: 30px;
    border-radius: 2.5px;
    border: 1px solid black;
  }

  &>input: focus {
    outline: 2px solid ${myColor};
    border: 1px solid white;
  }

  & > button {
    cursor: pointer;
    width: 50px;
    border: none;
    background-color: ${myColor};
    color: white;
    border-radius: 5px;
    transition: 0.5s;
  }

  & > button:hover {
    background-color: ${myHoverColor};
    transition: 0.5s;
  }
`;

export default Editor;
