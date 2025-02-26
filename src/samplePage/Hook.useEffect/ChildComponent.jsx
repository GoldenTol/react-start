import { useEffect, useState } from "react";

export const ChildComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("자식 컴포넌트 생성");

    //컴포넌트가 사라질때 해당 로직이 사라짐
    return () => {
      alert("자식 컴포넌트 닫힘");
    };
  }, []); //화면이 최초에 열릴때 한번만 사용

  useEffect(() => {
    count && alert(`변경된 숫자는 ${count}입니다.`);
  }, [count]); //최초에 열리지 않게 하기 위해

  return (
    <div className="w-80 h-52 border border-black-400 pt-16">
      <p>카운트: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <p className="font-mono text-xl">ChildComponent</p>
    </div>
  );
};
