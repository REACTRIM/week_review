// src/TreeSketch.jsx
import React, { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";

const pos = [
  { x: 377.26, y: 240.11 },
  { x: 508.44, y: 241.13 },
  { x: 347.95, y: 178.77 },
  { x: 51.65, y: 374.23 },
  { x: 127.89, y: 261.28 },
  { x: 252.21, y: 267.22 },
  { x: 209.32, y: 516.73 },
  { x: 432.75, y: 270.0 },
  { x: 254.16, y: 358.57 },
  { x: 453.82, y: 188.24 },
  { x: 300.68, y: 434.92 },
  { x: 278.11, y: 193.54 },
  { x: 146.58, y: 355.03 },
  { x: 290.65, y: 540.08 },
  { x: 379.15, y: 402.48 },
  { x: 342.6, y: 303.74 },
  { x: 519.05, y: 376.75 },
  { x: 178.96, y: 172.2 },
  { x: 456.45, y: 434.11 },
  { x: 56.17, y: 470.57 },
];

const colors = [
  "#e5e5e5",
  "#d9d9d9",
  "#cdcdcd",
  "#c1c1c1",
  "#b5b5b5",
  "#a9a9a9",
  "#9d9d9d",
  "#909090",
  "#848484",
  "#787878",
  "#6c6c6c",
  "#606060",
  "#545454",
  "#484848",
  "#3c3c3c",
  "#303030",
  "#242424",
  "#181818",
  "#0c0c0c",
  "#000000",
];

let treeImage;

function preload(p5) {
  treeImage = p5.loadImage("branch.jpg");
}

const TreeSketch = ({ onLeafHover }) => {
  const [leaves, setLeaves] = useState([]);
  const sketchRef = useRef();

  useEffect(() => {
    const newLeaves = pos.map((position, index) => {
      return { x: position.x, y: position.y, color: colors[index], id: index };
    });
    setLeaves(newLeaves);
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 800).parent(canvasParentRef);
    p5.imageMode(p5.CENTER);

    sketchRef.current = p5;
  };

  const draw = (p5) => {
    p5.background(255);
    p5.image(treeImage, p5.width / 2, p5.height / 2);
    leaves.forEach((leaf) => {
      p5.fill(leaf.color);
      p5.noStroke();
      p5.rect(leaf.x, leaf.y, 50, 75);
    });
  };

  const mouseMoved = (p5) => {
    leaves.forEach((leaf) => {
      if (
        p5.mouseX > leaf.x &&
        p5.mouseX < leaf.x + 50 &&
        p5.mouseY > leaf.y &&
        p5.mouseY < leaf.y + 75
      ) {
        onLeafHover(leaf.id);
      }
    });
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      mouseMoved={mouseMoved}
    />
  );
};

export default TreeSketch;
