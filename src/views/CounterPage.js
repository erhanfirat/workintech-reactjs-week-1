import React, { useState } from "react";
import Counter from "../components/Counter/Counter";
import PageTemplate from "./PageTemplate";

const CounterPage = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <PageTemplate title="Counter Page">
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        Toggle Counter
      </button>
      showCounter: {showCounter ? "true" : "false"}
      {showCounter && <Counter />}
    </PageTemplate>
  );
};

export default CounterPage;
