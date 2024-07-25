import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useState } from "react";

const mockDate = [];

function App() {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString(),
    };

    setTodos([...todos, newTodo]);
  };

  const onToggle = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return { ...todo };
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default App;
