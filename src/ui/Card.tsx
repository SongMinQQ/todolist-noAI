import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";
import useTheme from "../store/themeStore";

const primaryStyle = css`
    background-color: ${PRIMARY.surface};
    color: ${PRIMARY.inputText};
    border-radius: 5px;
    border-color: ${PRIMARY.inputBorder};
  `
const darkStyle = css`
    background-color: ${DARKMODE.surface};
    color: ${DARKMODE.inputText};
    border-radius: 5px;
    border-color: ${DARKMODE.inputBorder};
  `

const Card = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'primary' ? primaryStyle : darkStyle }>
      
    </div>
  );
};

export default Card;