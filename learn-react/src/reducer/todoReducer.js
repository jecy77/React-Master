// export default function todoReducer(todos, action) {
  export default function todoReducer(draft, action) {

  switch(action.type) {
    case 'added': {
      const { nextId, todoText } = action;
      // return [
      //   ...todos,
      //   { id: nextId, text: todoText, done: false }
      // ];

      draft.push({ id: nextId, text: todoText, done: false });
      break;
    }
    case 'added_index': {
      const { nextId, todoText, insertAt } = action;
      // return [
      //   // 삽입 지점 이전 항목
      //   ...todos.slice(0, insertAt),
      //   // 새 항목
      //   { id: nextId, text: todoText, done: false },
      //   // 삽입 지점 이후 항목
      //   ...todos.slice(insertAt)
      // ]
      
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false });
      break;
    }
    case 'deleted': {
      const { deleteId } = action;
      // return todos.filter(item => item.id !== deleteId);

      return draft.filter(item => item.id !== deleteId);
    }
    case 'done': {
      const { id, done } = action;
      // return todos.map(item => {
      //   if (item.id === id) {
      //     return { ...item, done };
      //   }
      //   return item;
      // });

      const target = draft.find(item => item.id === id);
      target.done = done;
      break;
    }
    case 'reverse': {
      // return todos.toReversed();

      return draft.toReversed();
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}