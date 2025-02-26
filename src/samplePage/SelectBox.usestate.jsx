import { useState } from "react";

export const SelectBox = () => {
  const [selectVal, setSelectVal] = useState("a");

  return (
    <>
      {/* <select
        onChange={(e) => setSelectVal(e.target.value)}
        defaultValue={selectVal}
      >
        {/* onChange={(e)의 e는 event의 인자 */}
      {/* <option value={"a"}>1번</option>
            <option value={"b"}>2번</option>
            <option value={"c"}>3번</option>
            <option value={"d"}>4번</option>
            <option value={"e"}>5번</option>
        </select> */}
      {/* 
      선택된 값: {selectVal}
    </> */}
      <select
        onChange={(e) => setSelectVal(e.target.value)}
        defaultValue={selectVal ? selectVal : "c"}
      >
        {/* onChange={(e)의 e는 event의 인자 */}
        <option value={"a"}>1번</option>
        <option value={"b"}>2번</option>
        <option value={"c"}>3번</option>
        <option value={"d"}>4번</option>
        <option value={"e"}>5번</option>
      </select>
      <br />
      선택된 값: {selectVal ? selectVal : "c"}
    </>
  );
};
