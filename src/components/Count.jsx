import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
}
