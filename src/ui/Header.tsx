import { css } from "@emotion/css";
import TouchableOpacity from "./TouchableOpacity";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useTheme from "../store/themeStore";

const headerStyle = css`
  background-color: transparent;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;
`;

interface HeaderProps {
  title: string;
  left?: boolean;
  right?: boolean;
};

const Header = (props: HeaderProps) => {
  const {theme} = useTheme();
  const { title, left, right } = props;
  return (
    <div className={headerStyle}>
      {left ? <BackBtn /> : <div></div>}
      <h1
        style={
          theme === 'primary' ? {color: "black"}:{color: "white"}
      }>
        {title}
      </h1>
      {right ? <ForwardBtn /> : <div></div>}
    </div>
  );
};

export default Header;

// theme store가 없을 경우 지우고 그냥 사용해도 무방

const BackBtn = () => {
  const {theme} = useTheme();
  const goBack = () => {
    history.back();
  }
  return (
    <TouchableOpacity onClick={goBack}>
      <IoIosArrowBack size={25} color={theme === 'primary' ? 'black' : 'white'} />
    </TouchableOpacity>
  )
}

const ForwardBtn = () => {
  const { theme } = useTheme();

  const goForward = () => {
    history.forward();
  }
  return (
    <TouchableOpacity onClick={goForward}>
      <IoIosArrowForward size={25} color={theme === 'primary' ? 'black' : 'white'} />
    </TouchableOpacity>
  )
}