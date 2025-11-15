import './App.css';
import ThemeToggleBtn from './components/ThemeToggleBtn';
import useTheme from './store/themeStore';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.dataset.theme = theme;
  },[theme])
  return (
    <>
      <ThemeToggleBtn/>
    </>
  )
}

export default App
