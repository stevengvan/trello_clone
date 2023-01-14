import "./App.css";
import { useState } from "react";
import Kanban from "./components/Kanban";

function App() {
  const [title, setTitle] = useState("Trello Clone");
  const [placeholder, setPlaceholder] = useState(title);

  const handleChangeTitle = (e) => {
    let newTitle = e.target.value;
    if (newTitle.length > 0) {
      setTitle(newTitle);
    } else {
      setPlaceholder(title);
    }
    e.target.blur();
  };

  return (
    <div className="App">
      <div className="board-title">
        <input
          className="board-text"
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleChangeTitle(e);
            }
          }}
          onBlur={(e) => handleChangeTitle(e)}
        />
      </div>
      <Kanban />
    </div>
  );
}

export default App;
