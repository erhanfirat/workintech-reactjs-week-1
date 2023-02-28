const CounterControls = (props) => {
  return (
    <div>
      <button onClick={props.azalt}>Azalt</button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.arttir}>Arttır</button>
      <button onClick={props.setInitialCountValue}>Set Default Value</button>
      <button onClick={props.setIncrementValue}>Set Increment Value</button>
    </div>
  );
};

export default CounterControls;
