import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it should have the correct title', () => {
  render(<App />); 
  const text = screen.getByText("Swear Jar");
  expect(text).toBeInTheDocument();
});