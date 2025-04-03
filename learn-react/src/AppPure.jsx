import "./App.css";
import PullUpPure from "./components/PullUpPure";

export default function AppPure(props) {
  return (
    <div>
      <PullUpPure counter={11} />
      <PullUpPure counter={11} />
      <PullUpPure counter={11} />
      {/* Input은 같지만 Output 셋 다 다름 */}
    </div>
  );
}
