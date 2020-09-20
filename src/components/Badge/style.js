import styled, { css } from "styled-components";
import { circle } from "utils/mixin";

const variant = {
  dot: css`
    position: relative;
    display: inline-block;
    padding: 5px;
    // 这里的 inline block 和下面的配合，并且 Padding 也有用，把图标放大啦，然后 before 也拉远了。
    // svg 和 before 都是 Block 元素，所以需要用 inline-block. 把两个放到一起
    
    &::before {
      position: absolute;
      top: 0;
      right: 0;

      content: "";
      ${circle("5px")};
      background-color: red;
      display: ${props => props.showBadgeDot? 'block' : "none"};
  `,

  number: css`
    ${circle("25px")}
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${(props) => !props.showBadgeNumber && props.badgeNumber === 0 && "visibility: hidden"};
  `,
};

const BadgeWrapper = styled.div`
  display: inline-block;
  ${(props) => variant[props.variant]}
// 这种选择的手段可以学习学习
`;
const Count = styled.div`
  color: white;
`;

export default BadgeWrapper;
export { Count };
