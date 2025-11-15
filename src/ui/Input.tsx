import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const inputBaseStyle = `
  border: 1px solid;
  padding: 0.6rem 1rem;
  width: 100%;
  max-width: 400px;
  min-width: 160px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const primaryStyle = css`
  ${inputBaseStyle};
  background-color: ${PRIMARY.inputBackground};
  color: ${PRIMARY.inputText};
  border-color: ${PRIMARY.inputBorder};
`;

const darkStyle = css`
  ${inputBaseStyle};
  background-color: ${DARKMODE.inputBackground};
  color: ${DARKMODE.inputText};
  border-color: ${DARKMODE.inputBorder};
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