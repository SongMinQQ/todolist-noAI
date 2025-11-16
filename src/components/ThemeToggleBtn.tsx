import TouchableOpacity from "../ui/TouchableOpacity";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import useTheme from "../store/themeStore";

const ICON_SIZE = 25;
const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <TouchableOpacity onClick={toggleTheme}>
      {theme === 'primary' ? <CiDark size={ICON_SIZE} /> : <CiLight color="orange" size={ICON_SIZE}/>}
    </TouchableOpacity>
  )
};

export default ThemeToggleBtn;