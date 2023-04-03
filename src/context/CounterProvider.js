import { createContext, useState } from "react";

export const CounterContext = createContext();


const CounterProvider = ({ children }) => {
  const [counterState, setCounterState] = useState({
    sayac: 0,
    artis: 10,
  });

  //   const globalState = {
  //     counterState: {
  //       sayac: 0,
  //       artis: 10,
  //     },
  //     setCounterState: () => {},
  //   };

  return (
    <CounterContext.Provider value={{ counterState, setCounterState }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
