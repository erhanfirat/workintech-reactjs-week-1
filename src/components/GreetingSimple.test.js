/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import GreetingSimple from "./GreetingSimple";

test("renders greeting on Greeting component", async () => {
  // Arrange
  render(<GreetingSimple userName="Ali" />);
  // Act
  const greeting = screen.queryByText("Olmayan bir metin");
  screen.debug();

  // Assert
  // expect(greeting).toBeInTheDocument();
});
