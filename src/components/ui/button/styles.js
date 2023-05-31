import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  padding: 0 24px;
  background-color: ${(props) => props.theme.buttonColor};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: none;
  font-family: ${(props) => props.theme.fontFamily};
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  color: ${(props) => props.theme.colorWhite};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
