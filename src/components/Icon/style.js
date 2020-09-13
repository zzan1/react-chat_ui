import styled, { css } from "styled-components";

const circleMixinFunc = () => css``;

const WrapperIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg,
  svg * {
    ${(props) => (props.color ? `fill: ${props.color}` : "")};
    ${(props) => (props.opacity ? `opacity: ${props.opacity}` : "")};
  }
`;

// 居中的写法
// svg 改变大小，颜色，透明度等等。
// 选择器，
// 保证默认效果的后退思想


export default WrapperIcon;
