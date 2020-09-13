import React from "react"; //rfcp
import PropTypes from "prop-types";
import WrapperNavbar, { WrapperMenuItem, MenuIcon } from "./style";
import Badge from "components/Badge";

function Navbar({ children, ...rest }) {
  return <WrapperNavbar {...rest}>{children}</WrapperNavbar>;
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <WrapperMenuItem active={active}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </a>
    </WrapperMenuItem>
  );
}

Navbar.propTypes = {
  children: PropTypes.any,
};
MenuItem.propTypes = {
  icon: PropTypes.element,
  active: PropTypes.bool,
  showBadge: PropTypes.bool,
};

export default Navbar;
export { MenuItem };
