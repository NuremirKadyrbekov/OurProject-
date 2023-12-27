import React, { useState } from "react";
import { Button } from 'antd';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">{count}</h1>
      <br />
      <div className="gap-1 grid">
        <Button className="text-white transition-all btn" onClick={() => setCount(count + 1)}>Click</Button>
        <Button className="text-white transition-all btn" onClick={() => setCount(count - 1)}>-</Button>
        <Button className="text-white transition-all btn" onClick={() => setCount(0)}>Reset</Button>
      </div>
    </div>
  );
}
