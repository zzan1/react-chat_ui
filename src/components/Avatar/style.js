import styled, { css } from "styled-components";
import { circle } from "utils/mixins";
// 定义一个模板函数，可以复用 css 和 访问变量；
// 函数名字， css，和下面的 styled。div 是一样的。

const circleMixinFunc = (color, size) => css`
  content: "";
  ${circle(color, size)};
  position: absolute;
`;

const WrapperAvatar = styled.div`
  position: relative;
`;

const StatusAvatar = styled.div`
  position: absolute;
  left: ${(props) => props.statusPosition}px;
  top: ${(props) => props.statusPosition}px;
  ::before {
    ${(props) => {
      return circleMixinFunc("white", props.statusCircleSize);
    }};
    transform: scale(2);
  }
  ::after {
    ${(props) => {
      return circleMixinFunc(props.status, props.statusCircleSize);
    }};
  }
`;
// 因为由于定位是从左上角定位的，这两个圆重叠是在中间的，所以可以通过调整位置来实现。但是更简洁的方法是一样的大小，通过缩放来实现；

// // ::after {
//     ${circleMixinFunc((props) => ({
//         color: props.status,
//         size: props.statusCircleSize,
//       }))};
//     }
// 这么做不能用, 不知道为什么

const ImgWrapperAvatar = styled.div`
  width: ${(props) => props.size || "100px"};
  height: ${(props) => props.size || "100px"};
  border-radius: 50%;
  overflow: hidden;
`;
// overflow, 把图片超出框体范围的去掉

const PortraitAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export { WrapperAvatar, StatusAvatar, ImgWrapperAvatar, PortraitAvatar };
