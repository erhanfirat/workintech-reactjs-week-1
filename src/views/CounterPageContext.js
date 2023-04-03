import React, { useState } from "react";
import CounterWithContextAPI from "../components/Counter/CounterWithContextAPI";
import PageTemplate from "./PageTemplate";

const CounterPageContext = () => {

  return (
    <PageTemplate title="Counter Page with Context API">
      <CounterWithContextAPI />
    </PageTemplate>
  );
};

export default CounterPageContext;
