import { useMemo, useState } from "react";
import { Button } from "./samplePage/Button.usestate";
import { ChildComponent } from "./samplePage/ChildComponent.props";
import { ParantComponent } from "./samplePage/Hook.useEffect/ParantComponent";
import { Input } from "./samplePage/Input.useRef";
import {
  HeavyJobComponent,
  HeavyJobComponent2,
} from "./samplePage/MemoComponent.ReactMemo";
import { MemoHeavyJobComponent } from "./samplePage/MemoComponent.ReactMemo";
import { MemoComponent } from "./samplePage/MemoComponent.useMemo";
import { SelectBox } from "./samplePage/SelectBox.usestate";
import { Table } from "./samplePage/Table";
import { TodoMain } from "./samplePage/TodoProject/TodoMain";

function App() {
  const [plusNum, setPlusNum] = useState(0);
  const [multiNum, setMultiNum] = useState(0);
  const memoNum = useMemo(() => ({ num: Number(plusNum) }), [plusNum]); //객체를 memo 시킨다.

  return (
    <>
      {/* <Button /> */}
      {/* <Input /> */}
      {/* <SelectBox /> */}
      {/* <Table /> */}
      {/* <ParantComponent /> */}
      {/* <MemoComponent /> */}
      {/* <ChildComponent title={"제목1"} content={"내용을 작성해요"} />
      <ChildComponent title={"제목2"} content={"내용을 작성해요"} />
      <ChildComponent title={"제목3"} content={"내용을 작성해요"} />
      <ChildComponent title={"제목4"} content={"내용을 작성해요"} />
      <ChildComponent title={"제목5"} content={"내용을 작성해요"} />
      <ChildComponent title={"제목6"} content={"내용을 작성해요"} />
      <ChildComponent title={"제목7"} content={"내용을 작성해요"} /> */}

      {/* <input type="number" onChange={(e) => setPlusNum(e.target.value)} /> */}
      {/* <HeavyJobComponent
        num={Number(plusNum)}
        numObj={{ num: Number(memoNum) }}
      /> */}
      {/* <MemoHeavyJobComponent num={Number(plusNum)} numObj={memoNum} /> */}

      {/* <input type="number" onChange={(e) => setMultiNum(e.target.value)} />
      <HeavyJobComponent2 num={Number(multiNum)} /> */}
      <TodoMain />
    </>
  );
}

export default App;
