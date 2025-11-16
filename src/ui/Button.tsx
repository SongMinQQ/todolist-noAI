import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const baseButtonStyle = css`
  border: 8px;
  padding: 0.6em 1.2em;
`
const primaryStyle = css`
  ${baseButtonStyle};
  background-color: ${PRIMARY.buttonBackground};
  color: ${PRIMARY.buttonText};
  &:hover{
    background-color: ${PRIMARY.buttonHover};
  }
`;
const darkStyle = css`
  ${baseButtonStyle};
  background-color: ${DARKMODE.buttonBackground};
  color: ${DARKMODE.buttonText};
  &:hover{
    background-color: ${DARKMODE.buttonHover}
  }
`;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  const { theme } = useTheme();
  const { children, ...rest } = props;
  return (
    <button
      className={theme == 'primary' ? primaryStyle : darkStyle}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;