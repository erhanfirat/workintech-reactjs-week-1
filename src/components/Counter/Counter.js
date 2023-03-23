import React, { useState, useEffect } from "react";
import CounterControls from "./CounterControls";
import "./Counter.css";

const Counter = (props) => {
  // state
  const [initialCount, setInitialCount] = useState(50);
  const [increment, setIncrement] = useState(10);
  const [count, setCount] = useState(initialCount);

  // useEffect(() => {
  //   console.log(`Increment value updated to: ${increment}`);

  //   return () => {
  //     console.log("Increment value will update from ", increment);
  //   };
  // }, [increment]);

  // useEffect(() => {
  //   return () => {
  //     if (count === 100) {
  //       alert("100 iyiydi aslında...");
  //     }
  //   };
  // }, [count]);

  useEffect(() => {
    console.log(`Counter componenti mount edildi!`);

    return () => {
      console.log("Counter will be unmounted!");
    };
  }, []);

  // useEffect(() => {
  //   console.log("Component did update!");
  // });

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
      Counter: <span data-testid="count-value-span">{count}</span>
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
