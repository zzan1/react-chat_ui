import styled, { css } from "styled-components";
import { circle } from "utils/mixins";

const variants = {
  dot: css`
    position: relative;
    padding: 5px;
    ::after {
      content: "";
      display: ${(props) => (props.show ? "block" : "none")};
      ${(props) => circle(props.theme.red, "6px")}
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
  default: css`
    ${(props) => circle(props.theme.red, "26px")};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${(props) => !props.showCount && props.count === 0 && "visibility: hidden"};
  `,
};

const Count = styled.div`
  color: white;
  font-size: ${(props) => props.theme.normal};
`;

const WrapperBadge = styled.div`
  display: inline-block;
  ${(props) => variants[props.variant]};
`;

// css 函数不需要 return ，他执行即发挥作用
// css 可以直接获得传进来的参数，多个div呢？？ 依据调用的时候？
export default WrapperBadge;
export { Count };
