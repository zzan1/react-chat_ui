import styled from "styled-components";
import { circle } from "utils/mixin";
// object(...) is not a function 就是这里没加括号

const AvatarWrapper = styled.div``;

const Status = styled.div`
  position: relative;
  &::before,
  &::after {
    position: absolute;
    content: "";
    top: ${(props) => props.statusSize};
    left: ${(props) => props.statusSize};
    ${(props) => circle(props.statusSize)}
  }

  &::before {
    transform: scale(2);
    background-color: ${({ theme }) => theme.gray};
    ${({ showStatus }) => (showStatus ? "" : "visibility: hidden")}
  }
  &::after {
    background-color: ${(props) => (props.status ? props.theme.green : "red")};
    ${({ showStatus }) => (showStatus ? "" : "visibility: hidden")}
  }
`;

const ImgWrapper = styled.div`
  ${(props) => circle(props.size)}
  overflow: hidden;
`;

const ImgContent = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export default AvatarWrapper;
export { Status, ImgWrapper, ImgContent };
