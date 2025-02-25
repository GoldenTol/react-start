import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
      <button onClick={() => setCount(0)}>초기화</button>
      <br />
      count: {count}
    </>
  );
};
