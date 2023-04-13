import { useReducer } from "react";
import { Button } from "reactstrap";

const COUNT_ACTIONS = {
  increase: "COUNT_INCREASE",
  decrease: "COUNT_DECREASE",
  plus: "COUNT_PLUS",
  assign: "COUNT_ASSIGN",
};

// action : {
//     type: "ACTION_NAME"
//     payload: "ACITON_DATA"
// }

const countReducer = (state, action) => {
  switch (action.type) {
    case COUNT_ACTIONS.increase:
      return state + 1;
    case COUNT_ACTIONS.decrease:
      return state - 1;
    case COUNT_ACTIONS.plus:
      return state + action.payload;
    case COUNT_ACTIONS.assign:
      return action.payload;
    default:
      return state;
  }
};

const countIncreaseAction = {
  type: COUNT_ACTIONS.increase,
};
const countDecreaseAction = {
  type: COUNT_ACTIONS.decrease,
};
const countPlusAction = (payload) => ({
  type: COUNT_ACTIONS.plus,
  payload,
});
const countAssignAction = (payload) => ({
  type: COUNT_ACTIONS.assign,
  payload,
});


const CounterWithUseReducer = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      {count}
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

export default CounterWithUseReducer;
