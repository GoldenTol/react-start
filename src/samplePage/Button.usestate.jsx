import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>클릭</button>
      // 이렇게 해도 숫자가 올라가지만 count에 직접 1을 더하기 보다 이전값에 1을 더하는게 권장하는 방식이니 쓰지마라 */}
      <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
      <button onClick={() => setCount(0)}>초기화</button>
      <br />
      count: {count}
    </>
  );
};
