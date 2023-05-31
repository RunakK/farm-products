import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export const Features = styled(Section)`
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 64px;
  position: relative;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 64px;
`;
