import {useDispatch, useSelector} from "react-redux";
import {addTodo, setTodo, updateTodo} from "./todoReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </button>
      <input defaultValue={todo.title}
             onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
    </li>
  );}
