export default function TodoList({onToggleTodo, onDeleteTodo, todos = []}) {
  // const items = todos; // 원본 todos 배열이 직접 변경됨 (props 훼손)
  // const items = [...todos]; // 얕은 복사 (Shallow Copy) → 새로운 배열 생성 → 원본 props 보호


 

  return(
    <ul>
      {todos.map(item => 
      <li key={item.id}>
        <input type="checkbox" 
        checked={item.done} 
        onChange={(e)=>onToggleTodo(item.id, e.target.checked)}/>
        <span>{item.done ? (<del>{item.text}</del>): item.text}</span>
        <button onClick={()=>onDeleteTodo(item.id)}>X</button>
        </li>)}
    </ul>
  )
}