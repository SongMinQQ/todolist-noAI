import { css } from "@emotion/css";
import type React from "react";

const touchableStyle = css`
    background-color: transparent;
    border: none;
  `

interface TouchableOpacityProps {
  readonly children: React.ReactNode;
  onClick?: () => void;
}
const TouchableOpacity = ({ children, onClick }: TouchableOpacityProps) => {
  return (
    <button className={touchableStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default TouchableOpacity;