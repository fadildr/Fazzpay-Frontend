import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementCounter, decrementCounter } from "stores/action/counter";

export default function Counter() {
  const counterData = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counterData);
  const [counter, setCounter] = useState(0);

  const increment = (data) => {
    setCounter(counter + data);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container text-center">
      <div>
        <h1>Counter App Without Redux</h1>
        <hr />
        <h3>{counter}</h3>
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => increment(2)}>
          +2
        </button>
        <hr />
        <hr />
        <h1>Counter App With Redux</h1>
        <hr />
        <h3>{counterData.count}</h3>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrementCounter())}
        >
          -
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch({ type: "RESET", data: 0 })}
        >
          Reset
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(incrementCounter(2))}
        >
          +2
        </button>
      </div>
    </div>
  );
}
