import "./App.css";
import { useState } from "react";
import Kanban from "./components/Kanban";

function App() {
  const [title, setTitle] = useState("Trello Clone");
  const [lists, setLists] = useState([
    {
      title: "To Do",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "testing 1 - 2 -3",
        "Hello World!",
        "Hello World!",
      ],
    },
    { title: "Doing", items: ["TEXT", "Totally not Trello"] },
    { title: "Done", items: [] },
  ]);

  return (
    <div className="App">
      <p className="board-title">{title}</p>
      <Kanban data={lists} />
    </div>
  );
}

export default App;
