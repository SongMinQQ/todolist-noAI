import { css } from "@emotion/css";
import type React from "react";

const touchableStyle = css`
    background-color: transparent;
    border: none;
    color: inherit;
  `

interface TouchableOpacityProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: React.ReactNode;
}
const TouchableOpacity = (props: TouchableOpacityProps) => {
  const { children, ...rest} = props;
  return (
    <button className={touchableStyle} {...rest}>
      {children}
    </button>
  );
};

export default TouchableOpacity;