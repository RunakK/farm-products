import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.pageWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 79px;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Copyright = styled.span`
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: 148px;
  vertical-align: middle;
  text-align: right;
`;
