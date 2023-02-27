import { useState } from "react";

// Hook

const Counter = () => {
  // state
  const [count, setCount] = useState(5);

  if (count == 5) setCount(count + 5);

  const arttir = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 5);
        }}
      >
        Azalt
      </button>
      Counter: {count}
      <button onClick={arttir}> Arttır</button>
      {count === 100 ? <div>OLEEYYY!!! We reached to 100.</div> : ""}
    </div>
  );
};

export default Counter;
