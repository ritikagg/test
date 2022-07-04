import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import useHook from "./useHook";

const App = () => {
  const tasks = useHook();
  const [newValue, setNewValue] = useState("");

  const handleAdd = (e) => setNewValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(newValue);
    setNewValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" value={newValue} onChange={handleAdd}></input>
        <button>Add</button>
      </form>
      <button onClick={tasks.undo}>Undo</button>
      {tasks.state.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <>
          {tasks.state.map(
            (ele, idx) =>
              !ele.isDel && (
                <li key={idx} onClick={() => tasks.remove(idx)}>
                  {ele.val}
                </li>
              )
          )}
        </>
      )}
    </>
  );
};

export default App;
