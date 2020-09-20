import React from "react";
import PropTypes from "prop-types";
import AvatarWrapper, { Status, ImgWrapper, ImgContent } from "./style";

function Avatar({ portrait, status, showStatus, size, ...rest }) {
  const statusSize = Number.parseInt(size) / 10 + "px";
  return (
    <AvatarWrapper {...rest}>
      <Status
        status={status}
        showStatus={showStatus}
        statusSize={statusSize}
      ></Status>
      <ImgWrapper size={size}>
        <ImgContent src={portrait}></ImgContent>
      </ImgWrapper>
    </AvatarWrapper>
  );
}

Avatar.propTypes = {
  portrait: PropTypes.string.isRequired,
  status: PropTypes.bool,
  showStatus: PropTypes.bool,
  size: PropTypes.string,
};

export default Avatar;
