import './App.css';
import TodoList from './components/TodoList';
import useTheme from './store/themeStore';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.dataset.theme = theme;
  },[theme])
  return (
    <>
      <TodoList/>
    </>
  )
}

export default App
