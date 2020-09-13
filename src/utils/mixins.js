import { css } from "styled-components";

export const circle = (color, size) => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`;
export const activeBar = ({
  barWidth = "8px",
  shadowWidth = "20px",
} = {}) => css`
  position: relative;
  ::before,
  ::after {
    position: absolute;
    content: "";
    height: 100%;

    left: 0px;
    top: 0px;
  }

  ::before {
    width: ${barWidth};
    background: linear-gradient(
      180deg,
      rgba(142, 197, 242, 1) 0%,
      rgba(79, 157, 222, 1) 100%
    );
  }

  ::after {
    width: ${shadowWidth};
    background: linear-gradient(
      270deg,
      rgba(41, 47, 76, 1) 0%,
      rgba(142, 197, 242, 1) 100%
    );
  }
`;
