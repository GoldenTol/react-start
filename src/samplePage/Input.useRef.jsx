import { useState } from "react";
import { useRef } from "react";

export const Input = () => {
  const [text, setText] = useState();
  const refText = useRef("");

  return (
    <>
      {/* <input
        onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.validationMessage);
        }}
      />
      <button onClick={() => alert(`입력하신 단어는 ${text}입니다.`)}>
        클릭
      </button>
      백팁(``)과 함께 $를 사용하는 레터럴 */}
      <input ref={refText} />
      {/* ref는 값을 가지고 있지만 렌더링 해주지는 않는다.  */}
      {/* <button onClick={() => alert(text)}>클릭</button> */}
      <button onClick={() => alert(refText.current.value)}>클릭</button>
      <br />
    </>
  );
};
