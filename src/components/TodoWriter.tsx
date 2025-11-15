import { css } from "@emotion/css";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Input from "../ui/Input";
import TodoAddBtn from "./TodoAddBtn";
const writeArea = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
`
const TodoWriter = () => {
  return (
    <div className={writeArea}>
      <ThemeToggleBtn />
      <Input placeholder="할 일을 작성하세요"/>
      <TodoAddBtn/>
    </div>
  );
};

export default TodoWriter;