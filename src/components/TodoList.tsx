import { useEffect, useReducer } from "react";
import Header from "../ui/Header";
import TodoListContainer from "./TodoListContainer";
import TodoWriter from "./TodoWriter";
import type { Todo } from "../types/todolist";

const ActionKind ={
  ADD_TODO : 'ADD_TODO',
  EDIT_TODO : 'EDIT_TODO',
  COMPLETE_TODO : 'COMPLETE_TODO',
  DELETE_TODO : 'DELETE_TODO',
} as const;
type ActionType =
  | { type: typeof ActionKind.ADD_TODO; payload: Todo }
  | { type: typeof ActionKind.EDIT_TODO; payload: { id: string; task: string } }
  | { type: typeof ActionKind.COMPLETE_TODO; payload: { id: string } }
  | { type: typeof ActionKind.DELETE_TODO; payload: { id: string } };

const INITAL_STATE: Todo[] = [];

function reducer(state: Todo[], action: ActionType): Todo[] {
  switch (action.type) {
    case ActionKind.ADD_TODO:
      return [ ...state, action.payload];
    case ActionKind.EDIT_TODO:
      return state.map((item) => 
        item.id === action.payload.id ? {...item, task: action.payload.task} : item
      )
    case ActionKind.DELETE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case ActionKind.COMPLETE_TODO:
      return state.map((item) => 
        item.id === action.payload.id ? {...item, isCompleted: !item.isCompleted} : item
      )
    default: return state;
  }
}
const TodoList = () => {
  const [todo, dispatch] = useReducer(reducer, INITAL_STATE);

  const addTodo = (task: string) => {
    if (!task) {
      alert("할 일을 입력하세요");
      return;
    }
    const params: Todo = {
      id: Date.now().toString(),
      isCompleted: false,
      task: task,
      isEdit: false,
    }
    dispatch({ type: ActionKind.ADD_TODO, payload: params });
  };
  const completeTodo = (id: string) => {
    dispatch({ type: ActionKind.COMPLETE_TODO, payload: {id} });
  };
  const editTodo = (id: string, newTask: string) => {
    dispatch({ type: ActionKind.EDIT_TODO, payload: {id , task: newTask} });
  }
  const deleteTodo = (id: string) => {
    dispatch({ type: ActionKind.DELETE_TODO, payload: {id} });
  }
  return (
    <>
      <Header title="TODO LIST"/>
      <TodoWriter addTodo={addTodo} />
      <TodoListContainer
        todo={todo}
        completeTodo={completeTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoList;