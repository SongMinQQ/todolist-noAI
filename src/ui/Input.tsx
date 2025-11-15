import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const primaryStyle = css`
  background-color: ${PRIMARY.inputBackground};
  color: ${PRIMARY.inputText};
  border-color: ${PRIMARY.inputBorder};
`;
const darkStyle = css`
  background-color: ${DARKMODE.inputBackground};
  color: ${DARKMODE.inputText};
  border-color: ${DARKMODE.inputBorder};
`;

interface InputProps {
  placeholder?: string;
  value?: string;
}
const Input = (props: InputProps) => {
  const { theme } = useTheme();
  const { placeholder, value } = props;
  return (
    <input
      className={theme === 'primary' ? primaryStyle : darkStyle}
      placeholder={placeholder}
      value={value}
    >
      
    </input>
  );
};

export default Input;