import { css } from "@emotion/css";
import { MdDelete } from "react-icons/md";
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
}
const TodoListContainer = (props: TodoListContainerProps) => {
  const { todo } = props;
  return (
    <div className={listContainerStyle}>
      {todo && todo.map((item) => (
        <TodoListItem todo={item} key={item.id}/>
      ))}
    </div>
  );
};

export default TodoListContainer;