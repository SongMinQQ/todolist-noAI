import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const primaryStyle = css`
    background-color: ${PRIMARY.buttonBackground};
    color: ${PRIMARY.buttonText};
    border-radius: 8px;
    padding: 0.6em 1.2em;
    &:hover{
      background-color: ${PRIMARY.buttonHover};
    }
  `
const darkStyle = css`
    background-color: ${DARKMODE.buttonBackground};
    color: ${DARKMODE.buttonText};
    border-radius: 8px;
    padding: 0.6em 1.2em;
    &:hover{
      background-color: ${DARKMODE.buttonHover}
    }
  `
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  const { theme } = useTheme();
  const { children, onClick, ...rest } = props;
  return (
    <button
      className={theme == 'primary' ? primaryStyle : darkStyle}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;