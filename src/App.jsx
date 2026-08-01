import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { plus, reset } from "./redux/counterAction";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="counter">{count}</h2>
      <div className="dokmes">
        <button className="btn" onClick={() => dispatch(plus(+1))}>
          +
        </button>
        <button className="btn" onClick={() => dispatch(plus(-1))}>
          -
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          RESET
        </button>
        <button className="btn" onClick={() => dispatch(plus(+5))}>
          +5
        </button>
        <button className="btn" onClick={() => dispatch(plus(-5))}>
          -5
        </button>
      </div>
    </div>
  );
}

export default App;
