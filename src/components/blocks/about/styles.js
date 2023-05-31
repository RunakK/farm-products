import styled from "styled-components";
import { P, Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledAbout = styled(Section)`
  display: flex;
  position: relative;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  align-items: center;
  z-index: 1;
  flex-direction: column;
  padding-left: 90px;
  box-sizing: border-box;

  &:after {
    content: "";
    position: absolute;
    height: 563px;
    width: 446px;
    border-radius: 50%;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled(P)`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;
