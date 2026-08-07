import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { plus, reset } from "./redux/counter/counterAction";
import {
  addMilk,
  removeMilk,
  toggleLowFat,
  resetMilk,
} from "./redux/milkCounter/milkCounterAction";

function App() {
  const count = useSelector((state) => state.counter.count);
  const milk = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <span className="ring"></span>
      <span className="ring"></span>
      <span className="ring"></span>
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
        <br />
        <div className="milk-card">
          <h2>🥛 Milk State</h2>

          <h3>Milk Count : {milk.count}</h3>
          <h3>Price : {milk.price}$</h3>
          <h3>Low Fat : {milk.isLowFat ? "✅ Yes" : "❌ No"}</h3>

          <div className="dokmes">
            <button className="btn" onClick={() => dispatch(addMilk())}>
              Add Milk
            </button>

            <button className="btn" onClick={() => dispatch(removeMilk())}>
              Remove Milk
            </button>

            <button className="btn" onClick={() => dispatch(toggleLowFat())}>
              Toggle Fat
            </button>

            <button className="btn" onClick={() => dispatch(resetMilk())}>
              Reset Milk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
