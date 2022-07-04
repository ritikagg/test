import React, { useState } from "react";

const useHook = (initialValue = []) => {
  const [state, setState] = useState(initialValue);
  const [undoList, setUndoList] = useState([]);

  const push = (newVal) => {
    setState((prevState) => [...prevState, { val: newVal, isDel: false }]);
  };

  const remove = (index) => {
    setUndoList((prevState) => [...prevState, index]);

    setState((prevState) => {
      return prevState.map((ele, idx) => {
        if (index === idx) {
          ele.isDel = true;
        }
        return ele;
      });
    });
  };

  const undo = () => {
    const lastDel = undoList.pop();
    setState((prev) => {
      return prev.map((ele, idx) => {
        if (lastDel === idx) {
          ele.isDel = false;
        }
        return ele;
      });
    });
  };

  return { state, push, remove, undo };
};

export default useHook;
