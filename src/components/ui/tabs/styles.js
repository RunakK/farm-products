import styled, { css } from "styled-components";

import Ul from "/src/components/styled/ul/ul";
import Li from "/src/components/styled/li/li";
import Button from "/src/components/styled/button/button";

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400px;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.panelBackgroundColor};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.BackgroundColor};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorBlack};
        `}
`;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;
