import styled from "styled-components";
import MyButtons from "./components/my-buttons";
import MyCounter from "./components/my-counter";
import { useState } from "react";
import TreeSketch from "./components/TreeSketch";

// function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = (e) => {
//     if (e.target.value === "0") {
//       setCount(0);
//       return;
//     }
//     setCount((prev) => prev + Number(e.target.value));
//   };
//   return (
//     // <Wrapper>
//     //   <h1>Simple Counter</h1>
//     //   <MyCounter count={count} />
//     //   <MyButtons onClick={handleClick} />
//     // </Wrapper>
//     <TreeSketch />
//   );
// }

function App() {
  const [hoveredLeaf, setHoveredLeaf] = useState(null);

  const handleLeafHover = (id) => {
    setHoveredLeaf(id);
  };
  return (
    <div className="App">
      <h1>Tree with Leaves</h1>
      <TreeSketch onLeafHover={handleLeafHover} />
      {hoveredLeaf !== null && (
        <div>
          <h2>Hovered Leaf: {hoveredLeaf}</h2>
          {/* Add more details or components here based on the hovered leaf */}
        </div>
      )}
    </div>
  );
}
export default App;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    width: 30%;
  }
`;
