import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="counter">{count}</h2>
      <div className="dokmes">
        <button className="btn" onClick={() => dispatch({ type: "PLUS" })}>
          +
        </button>
        <button className="btn" onClick={() => dispatch({ type: "NEGETIVE" })}>
          -
        </button>
        <button className="btn" onClick={() => dispatch({ type: "RESET" })}>
          RESET
        </button>
        <button className="btn" onClick={() => dispatch({ type: "FIVE" })}>
          +5
        </button>
        <button className="btn" onClick={() => dispatch({ type: "FIVEE" })}>
          -5
        </button>
      </div>
    </div>
  );
}

export default App;
