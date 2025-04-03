import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

// export default function Card({ darkMode, title, children}) {
export default function Card({ title, children }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    // style={{backgroundColor: 'black', color: 'white'}}
    <div className={`card ${darkMode ? "card--dark" : "card--light"}`}>
      {/* <div className="card" style="background-color: black; color: white"> // 안됨  */}
      <div className="card__header">{title}</div>
      <div className="card__body">{children}</div>
    </div>
  );
}
