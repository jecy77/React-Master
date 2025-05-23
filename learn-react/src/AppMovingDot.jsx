import { useState } from "react";

export default function AppMovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        // console.log('clientX: ', e.clientX);
        // console.log('clientY: ', e.clientY);

        // position.x 처럼 기존 값을 수정하면 안됨
        setPosition({
          x: e.clientX,
          y: e.clientY,
        }); // 기존 객체의 복사본을 만들어 사용
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
