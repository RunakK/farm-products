import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  padding: 0 90px;
  justify-content: space-between;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  position: relative;
  height: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
`;
