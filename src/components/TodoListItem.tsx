import { MdCheckBoxOutlineBlank, MdDelete, MdEdit, MdOutlineCheckBox, MdCheck } from "react-icons/md";
import Card from "../ui/Card";
import type { Todo } from "../types/todolist";
import TouchableOpacity from "../ui/TouchableOpacity";
import { useState } from "react";
import Input from "../ui/Input";

interface TodoListItemProps{
  todo: Todo;
  completeTodo: (id: string) => void;
  editTodo: (id: string, newTask: string, isEdit: boolean) => void;
  deleteTodo: (id: string) => void;
}
const ICON_SIZE = 20;
const TodoListItem = (props: TodoListItemProps) => {
  const { todo, completeTodo, editTodo, deleteTodo } = props;
  const { id, isCompleted, isEdit, task } = todo;
  const [editText, setEditText] = useState<string>(task);
  return (
    <Card>
      <TouchableOpacity onClick={()=>completeTodo(id)}>
        {!isCompleted ? <MdCheckBoxOutlineBlank size={ICON_SIZE} /> : <MdOutlineCheckBox size={ICON_SIZE} />}
      </TouchableOpacity>
      {!isEdit ?
        <span>{todo.task}</span>
        :
        <Input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
          placeholder="수정하세요"
        />
      }
      <div>
        <TouchableOpacity onClick={()=>editTodo(id, editText, isEdit)}>
          {!isEdit ?
            <MdEdit size={ICON_SIZE} />
            :
            <MdCheck size={ICON_SIZE}/>
          }
        </TouchableOpacity>
        <TouchableOpacity onClick={()=>deleteTodo(id)}>
          <MdDelete size={ICON_SIZE} />
        </TouchableOpacity>
      </div>
    </Card>
  );
};

export default TodoListItem;