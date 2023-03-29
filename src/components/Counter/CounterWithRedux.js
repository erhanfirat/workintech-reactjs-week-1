import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  countAssignAction,
  countDecreaseAction,
  countIncreaseAction,
  countPlusAction,
} from "../../store/actions/actions";

const CounterWithRedux = () => {
  const count = useSelector((store) => store.counterState);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Counter with Redux</h4>
      <span className="px-3"> Counter: {count}</span>
      <Button onClick={() => dispatch(countIncreaseAction)} className="ms-3">
        +
      </Button>
      <Button onClick={() => dispatch(countDecreaseAction)} className="ms-1">
        -
      </Button>
      <Button onClick={() => dispatch(countPlusAction(5))} className="ms-1">
        +5
      </Button>
      <Button onClick={() => dispatch(countPlusAction(10))} className="ms-1">
        +10
      </Button>
      <Button onClick={() => dispatch(countPlusAction(25))} className="ms-1">
        +25
      </Button>
      <Button onClick={() => dispatch(countAssignAction(0))} className="ms-1">
        RESET
      </Button>
    </div>
  );
};

export default CounterWithRedux;
