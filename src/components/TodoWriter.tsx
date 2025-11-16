import { css } from "@emotion/css";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
const writeArea = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
`;
interface TodoWriterprops{
  addTodo: (task: string) => void;
}
const TodoWriter = ({ addTodo }: TodoWriterprops) => {
  const [task, setTask] = useState<string>('');
  return (
    <div className={writeArea}>
      <ThemeToggleBtn />
      <Input
        placeholder="할 일을 작성하세요"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        maxLength={30} />
      <Button onClick={() => { addTodo(task); setTask(''); }}>
        ADD
      </Button>
    </div>
  );
};

export default TodoWriter;