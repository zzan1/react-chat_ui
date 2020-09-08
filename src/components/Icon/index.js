import React from "react"; //rfcp
import PropTypes from "prop-types";
import WrapperIcon from "./style";

function Icon({ children, ...rest }) {
  return (
    <WrapperIcon {...rest}>
      {children}
    </WrapperIcon>
  );
}

Icon.propTypes = {
    children: PropTypes.any
};

export default Icon;
