import React from 'react';
import { useState } from 'react';

const SwearJar = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const remove = () => {
    setCount((prevCount) => {
      const result = prevCount - 1;
      if (result < 0) {
        return 0;
      }
      return result;
    });
  };

  return (
    <div>
      <h1>Swear Jar</h1>
      <button onClick={add}>Add</button>
      <span data-testid="count">{count}</span>
      <button onClick={remove}>Remove</button>
    </div>
  );
};

export default SwearJar;