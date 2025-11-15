import { css } from "@emotion/css";
import Card from "../ui/Card";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  max-width: 1000px;
  margin: 20px auto;
  padding: 0px 20px;
`
const TodoListContainer = () => {
  return (
    <div className={listContainerStyle}>
      <Card>
        <MdCheckBoxOutlineBlank />
        <span>아 다크모드 ㄹㅇ 괜히함 젠장할</span>
        <div>
          <MdEdit />
          <MdDelete />
        </div>
      </Card>
      <Card>
        <MdCheckBoxOutlineBlank />
        <span>디자인 ㅈㄴ귀찮네</span>
        <div>
          <MdEdit />
          <MdDelete />
        </div>
      </Card>
    </div>
  );
};

export default TodoListContainer;