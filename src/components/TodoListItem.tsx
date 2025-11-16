import { MdCheckBoxOutlineBlank, MdDelete, MdEdit } from "react-icons/md";
import Card from "../ui/Card";
import type { Todo } from "../types/todolist";

interface TodoListItemProps{
  todo: Todo;
}
const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  return (
    <Card>
      <MdCheckBoxOutlineBlank />
      <span>{todo.task}</span>
      <div>
        <MdEdit />
        <MdDelete />
      </div>
    </Card>
  );
};

export default TodoListItem;