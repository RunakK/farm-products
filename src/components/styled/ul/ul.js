import styled, { css } from "styled-components";

const gridList = css`
  list-style-type: none;
  gap: ${(props) =>
    props.$indent ? `${props.$indent}px` : `${props.theme.indent}`};
  font-size: 0;
  line-height: 0;
  font-size: 0;
  line-height: 0;
  display: ${(props) => props.$display || "flex"};
  flex-wrap: ${(props) => props.$wrap || "wrap"};

  li {
    display: flex;
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
      props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
    vertical-align: top;
    text-align: left;
    overflow: hidden;
  }
`;

const UL = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")};
`;

export default UL;
