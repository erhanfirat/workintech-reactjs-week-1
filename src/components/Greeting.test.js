/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting on Greeting component", async () => {
  // Arrange
  render(<Greeting />);
  // Act
  // const greeting = screen.getByText("Merhaba");
  // 		or
  const greeting = screen.getByText(/MerhaBA/i); // REGEX

  screen.debug();

  // const breakTest = screen.queryByText("olmayan bir metin");
  // Assert
  expect(greeting).toBeInTheDocument();
});
