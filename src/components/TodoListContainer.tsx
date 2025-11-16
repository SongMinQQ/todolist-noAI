import { css } from "@emotion/css";
import type { Todo } from "../types/todolist";
import TodoListItem from "./TodoListItem";

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  max-width: 700px;
  margin: 20px auto;
  padding: 0px 20px;
`;
interface TodoListContainerProps{
  todo: Todo[];
  completeTodo: (id: string) => void;
  editTodo: (id: string, newTask: string) => void;
  deleteTodo: (id: string) => void;
}
const TodoListContainer = (props: TodoListContainerProps) => {
  const { todo, completeTodo, editTodo, deleteTodo } = props;
  return (
    <div className={listContainerStyle}>
      {todo && todo.map((item) => (
        <TodoListItem todo={item} key={item.id} completeTodo={completeTodo} editTodo={editTodo} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
};

export default TodoListContainer;