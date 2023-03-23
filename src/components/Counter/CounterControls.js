import { Button } from "reactstrap";

const CounterControls = (props) => {
  return (
    <div>
      <Button className="me-2" color="danger" onClick={props.azalt}>
        Azalt
      </Button>
      <Button className="me-2" color="primary" onClick={props.reset}>
        Reset
      </Button>
      <Button className="me-2" color="success" onClick={props.arttir} data-testid="increase-button">
        Arttır
      </Button>
      <Button
        className="me-2"
        color="primary"
        onClick={props.setInitialCountValue}
      >
        Set Default Value
      </Button>
      <Button
        className="me-2"
        color="primary"
        onClick={props.setIncrementValue}
      >
        Set Increment Value
      </Button>
    </div>
  );
};

export default CounterControls;
