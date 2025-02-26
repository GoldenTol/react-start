import tableData from "../common/tableData";
import { useEffect, useState } from "react";

export const Table = () => {
  // console.log(tableData);
  const [checkedItems, setCheckedItem] = useState([]);
  // useEffect(() => {
  //   console.log(checkedItems);
  // }, [checkedItems]);

  //체크박스 전체 선택
  const handleAllCheck = (checked) => {
    //1. 전체 선택 체크박스가 선택되었는지에 대한 정보를 가져와야 한다.
    if (checked) {
      //전체 선택을 하는 경우, tableData의 id값들을  checkedItems에 배열 형태로 저장장
      const idArray = [];
      tableData.forEach((el) => idArray.push(el.id));
      setCheckedItem(idArray);
    } else {
      //전체 선택 해제 시. checkedItems을 빈 배열로 만든다.
      setCheckedItem([]);
    }
  };

  //체크박스 단일 선택 시
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      //각각의 체크박스가 선택이 되는 경우, checkedItems에 추가가 됩니다.
      setCheckedItem((prev) => [...prev, id]);
      //[...prev]는 새로운 주소값을 주기 위해 사용(변경을 감지 하기 못하고 재렌더링 하지 않기 때문에)
    } else {
      //체크가 해제되면, 체크된 아이템을 제외한 배열을 만듬
      setCheckedItem(checkedItems.filter((el) => el !== id));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={(e) => handleSingleCheck(e.target.checked)}
              checked={checkedItems.length === tableData.length ? true : false}
            />
          </th>
          <th>제목</th>
          <th>내용</th>
          <th>만든 날짜</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data.id}>
              <td>
                <input
                  type="checkbox"
                  value={data.id}
                  // checked={checkedItems.includes(data, id) ? true : false}
                />
              </td>
              <td>{data.title}</td>
              <td>{data.content}</td>
              <td>{data.date}</td>
            </tr>
          );
        })}
      </tbody>
      {checkedItems.length}개가 선택되었습니다.
    </table>
  );
};
