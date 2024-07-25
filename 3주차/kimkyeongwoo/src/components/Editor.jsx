import React, { useState, useRef } from "react";
import styled from "styled-components";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickButton = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickButton();
    }
  };

  return (
    <EditorSection>
      <h4>Todos</h4>
      <div>
        <input
          ref={contentRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="추가할 Todos..."
        ></input>

        <button onClick={onClickButton}>추가</button>
      </div>
    </EditorSection>
  );
};

const EditorSection = styled.div`
  & > div {
    & > input {
      padding: 10px;
      flex: 1;
    }

    display: flex;
    gap: 20px;
  }
`;

export default Editor;
