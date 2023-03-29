import React, { useState } from "react";
import Counter from "../components/Counter/Counter";
import CounterWithRedux from "../components/Counter/CounterWithRedux";
import CounterWithUseReducer from "../components/Counter/CounterWithUseReducer";
import PageTemplate from "./PageTemplate";

const CounterPage = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <PageTemplate title="Counter Page">
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
        data-test-id="toggle-counter"
      >
        Toggle Counter
      </button>
      showCounter: {showCounter ? "true" : "false"}
      {showCounter && <Counter />}
      <hr />
      <h2>Counter With useReducer</h2>
      <CounterWithUseReducer />
      <hr />
      <h2>Counter With Redux</h2>
      <CounterWithRedux />
    </PageTemplate>
  );
};

export default CounterPage;
