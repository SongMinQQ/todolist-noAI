import { css } from "@emotion/css";
import { DARKMODE, PRIMARY } from "../styles/theme";

const primaryStyle = css`
    background-color: ${PRIMARY.inputBackground};
    color: ${PRIMARY.inputText};
    border-color: ${PRIMARY.inputBorder};
  `
const darkStyle = css`
    background-color: ${DARKMODE.inputBackground};
    color: ${DARKMODE.inputText};
    border-color: ${DARKMODE.inputBorder};
  `

const Input = ({varient} : {varient: 'primary' | 'dark'}) => {
  return (
    <input className={varient === 'primary' ? primaryStyle : darkStyle }>
      
    </input>
  );
};

export default Input;