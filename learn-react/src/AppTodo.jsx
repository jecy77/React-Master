import "./App.css";
import TodoList from "./components/todo/TodoList";
import { useImmerReducer } from "use-immer";
import { useReducer, useState } from "react";
import todoReducer from "./reducer/todoReducer";

function AppTodo(props) {
  const [todoText, setTodoText] = useState("");

  // const [todos, setTodos] = useState([
  //   { id: 0, text: 'HTML&CSS 공부하기', done: false},
  //   { id: 1, text: '자바스크립트 공부하기', done:false},
  // ]);

  // const [todos, dispatch] = useReducer(todoReducer, [
  //   {id: 0, text: "HTML&CSS 공부하기", done: false },
  //   {id: 1, text: "자바스크립트 공부하기", done: false },
  // ]);

  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // 1] added
  const handleAddTodo = (e) => {
    // const nextId = todos.length;
    // setTodos([
    //   ...todos,
    //   {id: nextId, text: todoText, done: false}
    // ])

    dispatch({
      type: "added",
      nextId: todos.length,
      todoText,
    });
    setTodoText(""); // null, undefined [x]
  };

  // 2] added_index
  const handleAddTodoByIndex = () => {
    // const nextId = todos.length;
    // const newTodos = [
    //   // 삽입 지점 이전 항목
    //   ...todos.slice(0, insertAt),
    //   {id: nextId, text: todoText, done: false},
    //   // 삽입 지점 이후 항목
    //   ...todos.slice(insertAt)
    // ];
    // setTodos(newTodos);

    dispatch({
      type: "added_index",
      insertAt,
      nextId: todos.length,
      todoText,
    });
    setTodoText("");
  };

  const handleAddTodoOnEnter = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      handleAddTodo();
    }
  };

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    // const newTodos = todos.filter(item => item.id != deleteId);
    // setTodos(
    //   newTodos
    // );

    dispatch({
      type: "deleted",
      insertAt,
      deleteId,
    });
  };

  // 4] 'done'
  const handleToggleTodo = (id, done) => {
    // const nextTodos = todos.map(item => {
    //   if (item.id === id){
    //     return {...item, done};
    //   }
    //   return item;
    // })
    // setTodos(nextTodos);

    dispatch({
      type: "done",
      id,
      done,
    });
  };

  // 5] 'reverse'
  const handleReverse = () => {
    // 방법1. reverse API - 원본 배열 변경
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);

    // 방법2. toReversed API - 새로운 배열 생성
    // setTodos(todos.toReversed())

    dispatch({
      type: "reverse",
    });
  };

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleAddTodoOnEnter}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>
              {index} 번째
            </option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
