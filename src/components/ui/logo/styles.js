import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const logoStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.fontColorBlack};
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.fontColorBlack};
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  min-height: 44px;
  margin-left: 24px;
  color: ${(props) => props.theme.colorBlackForText};
`;
