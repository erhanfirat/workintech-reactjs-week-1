import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

// ROOT COMPONENT
// ATOMIC DESIGN PATTERN
// Hot Reload
// JSX > JS Expression

function App() {
  const user = {
    name: "Ali",
    email: "ali@ali.com",
  };
  const [showCounter, setShowCounter] = useState(true);
  let showCounterNotState = true;

  return (
    <div className="App">
      Merhaba {user.name}!
      <br />
      <button
        onClick={() => {
          // setShowCounter(!showCounter);
          showCounterNotState = !showCounterNotState;
        }}
      >
        Toggle Counter
      </button>
      showCounter: {showCounterNotState ? "true" : "false"}
      {showCounterNotState && <Counter />}
    </div>
  );
}

export default App;
