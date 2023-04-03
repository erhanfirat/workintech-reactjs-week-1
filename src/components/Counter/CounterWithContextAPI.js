import { useContext } from "react";
import { Button } from "reactstrap";
import { CounterContext } from "../../context/CounterProvider";

const CounterWithContextAPI = () => {
  const { counterState, setCounterState } = useContext(CounterContext);

  return (
    <div>
      <h4>Counter with Context API</h4>
      <span className="px-3"> Counter: {counterState.sayac}</span>
      <Button
        onClick={() =>
          setCounterState({ ...counterState, sayac: counterState.sayac + 1 })
        }
        className="ms-3"
      >
        +
      </Button>
      <Button
        onClick={() =>
          setCounterState({ ...counterState, sayac: counterState.sayac - 1 })
        }
        className="ms-1"
      >
        -
      </Button>

      <Button
        onClick={() => setCounterState({ ...counterState, sayac: 0 })}
        className="ms-1"
      >
        RESET
      </Button>
    </div>
  );
};

export default CounterWithContextAPI;
