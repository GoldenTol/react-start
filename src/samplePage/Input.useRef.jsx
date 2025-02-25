// import { useState } from "react";
import { useRef } from "react";

export const Input = () => {
  // const [text, setText] = useState();
  const refText = useRef("");

  return (
    <>
      {/* <input onChange={(e) => {
        setText(e.target.value);
        console.log(e.target.validationMessage)
    }} /> */}
      <input ref={refText} />
      {/* <button onClick={() => alert(text)}>클릭</button> */}
      <button onClick={() => alert(refText.current.value)}>클릭</button>
      <br />
    </>
  );
};
