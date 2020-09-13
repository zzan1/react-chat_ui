import PropTypes from "prop-types";
import React from "react"; //rfcp
import WrapperBadge, { Count } from "./style";

function Badge({ children, show, count, showCount, ...rest }) {
  return (
    <WrapperBadge
      variant={children ? "dot" : "default"}
      show={show}
      count={count}
      showCount={showCount}
    >
      {children || <Count>{count}</Count>}
    </WrapperBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  showCount: PropTypes.bool,
  count: PropTypes.number,
  children: PropTypes.any,
};

export default Badge;
