import TouchableOpacity from "../ui/TouchableOpacity";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import useTheme from "../store/themeStore";

const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <TouchableOpacity onClick={toggleTheme}>
      {theme === 'primary' ? <CiDark size={25} /> : <CiLight color="orange" size={25}/>}
    </TouchableOpacity>
  )
};

export default ThemeToggleBtn;