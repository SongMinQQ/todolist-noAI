import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const baseCardStyle = css`
  border-radius: 5px;
  border: 1px solid;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 1.5rem;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const primaryStyle = css`
  ${baseCardStyle};
  background-color: ${PRIMARY.surface};
  color: ${PRIMARY.text};
  border-color: ${PRIMARY.inputBorder};
`;

const darkStyle = css`
  ${baseCardStyle};
  background-color: ${DARKMODE.surface};
  color: ${DARKMODE.text};
  border-color: ${DARKMODE.inputBorder};
`;

interface CardProps{
  readonly children?: React.ReactNode;
}
const Card = (props: CardProps) => {
  const { theme } = useTheme();
  const {children} = props;
  return (
    <div className={theme === 'primary' ? primaryStyle : darkStyle }>
      {children}
    </div>
  );
};

export default Card;