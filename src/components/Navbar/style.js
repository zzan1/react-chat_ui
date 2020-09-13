import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixins";

const WrapperMenuItem = styled.div`
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 74px;
  }

  ${activeBar()}
  ${({ active }) => {
    return active ? "" : "&::before, &::after {height: 0}";
  }}
`;

const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  ${(props) => {
    return props.active ? "" : "opacity: 0.3";
  }};
`;

const WrapperNavbar = styled.div``;

export default WrapperNavbar;
export { WrapperMenuItem, MenuIcon };
