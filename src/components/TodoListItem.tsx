import { MdCheckBoxOutlineBlank, MdDelete, MdEdit, MdOutlineCheckBox } from "react-icons/md";
import Card from "../ui/Card";
import type { Todo } from "../types/todolist";
import TouchableOpacity from "../ui/TouchableOpacity";

interface TodoListItemProps{
  todo: Todo;
  completeTodo: (id: string) => void;
  editTodo: (id: string, newTask: string) => void;
  deleteTodo: (id: string) => void;
}
const ICON_SIZE = 20;
const TodoListItem = (props: TodoListItemProps) => {
  const { todo, completeTodo, editTodo, deleteTodo } = props;
  const { id, isCompleted, isEdit, task } = todo;
  return (
    <Card>
      <TouchableOpacity onClick={()=>completeTodo(id)}>
        {!isCompleted ? <MdCheckBoxOutlineBlank size={ICON_SIZE} /> : <MdOutlineCheckBox size={ICON_SIZE} />}
      </TouchableOpacity>
      <span>{todo.task}</span>
      <div>
        <TouchableOpacity>
          <MdEdit size={ICON_SIZE} />
        </TouchableOpacity>
        <TouchableOpacity onClick={()=>deleteTodo(id)}>
          <MdDelete size={ICON_SIZE} />
        </TouchableOpacity>
      </div>
    </Card>
  );
};

export default TodoListItem;