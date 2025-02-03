import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SwearJar from './SwearJar';


test("It should have the correct value when set to 8.", () => {
render(<SwearJar initialValue={8} />);
const count = screen.queryByText(8);
expect(count).toHaveTextContent(8);
});

test("It should have an initial value of 0.", () => {
  render(<SwearJar />);
  const count = screen.queryByText(0);
  expect(count).toHaveTextContent(0);
});

test("It should increase the value correctly when add is pressed once.", () => {
  render(<SwearJar initialValue={1} />);
  const AddButton = screen.getByText("+");
  userEvent.click(AddButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent(2);
});

test("It should increase the value correctly when add is pressed twice.", () => {
  render(<SwearJar initialValue={1} />);
  const AddButton = screen.getByText("+");
  userEvent.click(AddButton);
  userEvent.click(AddButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent(3);
});

test("It should decrease the value by one when remove is pressed once.", () => {
  render(<SwearJar initialValue={2} />);
  const RemoveButton = screen.getByText("-");
  userEvent.click(RemoveButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent(1);
});

test("It should decrease the value by two when remove is pressed twice.", () => {
  render(<SwearJar initialValue={2} />);
  const RemoveButton = screen.getByText("-");
  userEvent.click(RemoveButton);
  userEvent.click(RemoveButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent(0);
});

test("It should not allow a negative number when the initial value is 0 and remove is clicked.", () => {
  render(<SwearJar initialValue={0} />);
  const RemoveButton = screen.getByText("-");
  userEvent.click(RemoveButton);
  const count = screen.getByTestId("count");
  expect(count).toBeVisible();
});

test("it should not allow a negative number when the intial value is 2 and remove is clicked 4 times", () => {
  render(<SwearJar initialValue={2} />);
  const RemoveButton = screen.getByText("-");
  userEvent.click(RemoveButton);
  userEvent.click(RemoveButton);
  userEvent.click(RemoveButton);
  userEvent.click(RemoveButton);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent(0);
});