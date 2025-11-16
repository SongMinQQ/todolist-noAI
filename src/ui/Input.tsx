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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  ref?: React.Ref<HTMLInputElement>;
}
const Input = (props: InputProps) => {
  const { theme } = useTheme();
  const { ref: inputRef, className, ...rest } = props;
  return (
    <input
      className={theme === 'primary' ? primaryStyle : darkStyle}
      ref={inputRef}
      {...rest}
    >
      
    </input>
  );
};

export default Input;