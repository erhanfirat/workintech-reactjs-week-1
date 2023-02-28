import { useState } from "react";
import Counter from "../components/Counter/Counter";

const Main = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <br />
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        Toggle Counter
      </button>
      showCounter: {showCounter ? "true" : "false"}
      {showCounter && <Counter />}
    </div>
  );
};

export default Main;
