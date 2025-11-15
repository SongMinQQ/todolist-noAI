import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const primaryStyle = css`
  background-color: ${PRIMARY.inputBackground};
  color: ${PRIMARY.inputText};
  border-color: ${PRIMARY.inputBorder};
  border-radius: 5px;
`;
const darkStyle = css`
  background-color: ${DARKMODE.inputBackground};
  color: ${DARKMODE.inputText};
  border-color: ${DARKMODE.inputBorder};
  border-radius: 5px;
`;

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  size?: number;
  maxLength?: number;
}
const Input = ({placeholder, value, type = 'text', size = 20, maxLength = 100}: InputProps) => {
  const { theme } = useTheme();
  return (
    <input
      className={theme === 'primary' ? primaryStyle : darkStyle}
      placeholder={placeholder}
      value={value}
      type={type}
      size={size}
      maxLength={maxLength}
    >
      
    </input>
  );
};

export default Input;