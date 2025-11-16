import { useReducer } from "react";
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
interface ActionType{
  type: keyof typeof ActionKind;
  payload: Todo;
};

const INITAL_STATE: Todo[] = [];

function reducer(state: Todo[], action: ActionType): Todo[] {
  switch (action.type) {
    case ActionKind.ADD_TODO:
      return [ ...state, action.payload];
    case ActionKind.EDIT_TODO:
      return state.map((item) => 
        item.id === action.payload.id ? action.payload : item
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

  const addTodo = (params: Todo) => {
    dispatch({ type: ActionKind.ADD_TODO, payload: params });
  };
  const completeTodo = (params: Todo) => {
    dispatch({ type: ActionKind.COMPLETE_TODO, payload: params });
  };
  const editTodo = (params: Todo) => {
    dispatch({ type: ActionKind.EDIT_TODO, payload: params });
  }
  const deleteTodo = (params: Todo) => {
    dispatch({ type: ActionKind.DELETE_TODO, payload: params });
  }
  
  
  return (
    <>
      <Header title="TODO LIST"/>
      <TodoWriter addTodo={addTodo} />
      <TodoListContainer />
    </>
  );
};

export default TodoList;