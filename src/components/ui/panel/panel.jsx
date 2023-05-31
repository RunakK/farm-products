import styled from "styled-components";
import { Section } from "/src/components/styled";

export const Panel = styled(Section)`
  padding: ${(props) => props.theme.indent};
  padding-top: ${(props) => `${props.paddingTop}px` || props.theme.indent};
  padding-bottom: ${(props) =>
    `${props.paddingBottom}px` || props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => `${props.marginBottom}px` || 0};
  width: ${(props) => `${props.$width}px` || "auto"};
  display: block;
  background-color: ${(props) => props.theme.colorWhite};
`;

export default Panel;
