import Header from "../ui/Header";
import TodoListContainer from "./TodoListContainer";
import TodoWriter from "./TodoWriter";

const TodoList = () => {
  return (
    <>
      <Header title="TODO LIST"/>
      <TodoWriter />
      <TodoListContainer/>
    </>
  );
};

export default TodoList;