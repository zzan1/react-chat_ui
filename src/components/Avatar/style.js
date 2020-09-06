import styled, { css } from "styled-components";

// 定义一个模板函数，可以复用 css 和 访问变量；
// 函数名字， css，和下面的 styled。div 是一样的。

const circleMixinFunc = (color) => css`
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  background-color: ${color};
`;

const WrapperAvatar = styled.div`
  position: relative;
`;

const StatusAvatar = styled.div`
  position: absolute;
  left: 7px;
  top: 7px;

  ::before {
    ${circleMixinFunc("white")}
    transform: scale(2);
  }
  ::after {
    ${circleMixinFunc((props) => props.theme.green)}
  }
`;
// 因为由于定位是从左上角定位的，这两个圆重叠是在中间的，所以可以通过调整位置来实现。但是更简洁的方法是一样的大小，通过缩放来实现；

const ImgWrapperAvatar = styled.div`
  width: 80px;
  height: 80px;
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
