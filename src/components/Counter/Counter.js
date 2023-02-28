import React, { useState } from "react";
import CounterControls from "./CounterControls";
import "./Counter.css";

const Counter = (props) => {
  // state
  const [initialCount, setInitialCount] = useState(50);
  const [increment, setIncrement] = useState(10);
  const [count, setCount] = useState(initialCount);

  const arttir = () => {
    setCount(count + increment);
  };

  const azalt = () => {
    setCount(count - increment);
  };

  const reset = () => {
    setCount(initialCount);
  };

  const setInitialCountValue = () => {
    setInitialCount(count);
  };

  const setIncrementValue = () => {
    setIncrement(count);
  };

  // child > parent component data akışı

  return (
    <div>
      Counter: {count}
      <CounterControls
        azalt={azalt}
        arttir={arttir}
        reset={reset}
        setIncrementValue={setIncrementValue}
        setInitialCountValue={setInitialCountValue}
      />
      {count === 100 ? <div>OLEEYYY!!! We reached to 100.</div> : ""}
    </div>
  );
};

export default Counter;
