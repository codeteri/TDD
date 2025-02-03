import React from 'react';
import { render, screen} from '@testing-library/react';
import SwearJar from './Swearjar';

test("It should have the correct value when set to 8.", () => {
render(<SwearJar initialValue={8} />);
const count = screen.queryByText(8);
expect(count).toBeVisible();
});

test("It should have an initial value of 0.", () => {
  render(<SwearJar />);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("It should increase the value correctly when add is pressed once.", () => {
  throw new Error("Test not implemented");
});

test("It should increase the value correctly when add is pressed twice.", () => {
  throw new Error("Test not implemented");
});

test("It should decrease the value correctly when remove is pressed once.", () => {
  throw new Error("Test not implemented");
});

test("It should decrease the value correctly when remove is pressed twice.", () => {
  throw new Error("Test not implemented");
});

test("It should not allow a negative number when the initial value is 0 and remove is clicked.", () => {
  throw new Error("Test not implemented");
});