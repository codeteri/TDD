import React from 'react';
const SwearJar = ({initialValue}) => {
  return (
    <div>
      <h1>Swear Jar</h1>
      <span>{initialValue ?? 0}</span>
    </div>
  );
};

export default SwearJar;