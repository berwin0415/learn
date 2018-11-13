import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>count{count}</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <button onClick={() => setCount(count - 1)}>add count</button>
    </>
  );
};

export default Hooks;
