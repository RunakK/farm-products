import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const Feature = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  justify-content: center;
  margin-left: ${(props) => props.indent};
  padding: 2px 10px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 4px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;

export const Text = styled(P)`
  text-align: left;
`;
