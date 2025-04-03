import { useState } from "react";

// 일반적으로 사용
export default function Counter({ onTotal }) {
  // 일반 변수 사용 - 콘솔에는 값이 증가하지만, UI는 변경되지 않음
  // let counter = 1;
  // const handleCounter = () => {
  //   counter++;
  //   console.log('counter: ', counter);
  // }

  // useState 사용 - 상태가 변경되면 컴포넌트가 다시 렌더링되어 UI도 업데이트됨
  const [counter, setCounter] = useState(0);
  console.log("[렌더링] Counter: ", counter);

  const handleCounter = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); // 3이 아닌, 1이 결과값으로 출력 -> why? state가 스냅샷처럼 동작

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1); // callback 함수를 이용!
    console.log("[함수호출] Counter: ", counter);

    if (onTotal) {
      onTotal();
    }
  };

  // 상태, 로직
  return <button onClick={handleCounter}>Counter: {counter}</button>;
}

// UI만 담당하는 컴포넌트
// export const Counter = () => (
//   <button>Counter</button>
// )

// export default Counter
