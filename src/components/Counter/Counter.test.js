/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments count when increment button is clicked", async () => {
  // Arrange
  render(<Counter />);
  // Act
  const count = screen.getByTestId("count-value-span");
  screen.debug(count);
  // get the button node
  const btnIncrement = screen.getByTestId("increase-button");
  // simulate a user click
  userEvent.click(btnIncrement);
  // Assert
  expect(count).toHaveTextContent("60"); //passes with 1 because we expect it to be 1 after a button click
  expect(count).not.toHaveTextContent("50");
});
