import React from "react"; //rfcp
import PropTypes from "prop-types";
import face1 from "../../assets/images/face-male-1.jpg";
import {
  WrapperAvatar,
  StatusAvatar,
  ImgWrapperAvatar,
  PortraitAvatar,
} from "./style";

function Avatar(props) {
  return (
    <WrapperAvatar>
      <StatusAvatar></StatusAvatar>
      <ImgWrapperAvatar>
        <PortraitAvatar src={face1} alt="" />
      </ImgWrapperAvatar>
    </WrapperAvatar>
  );
}

Avatar.propTypes = {};

export default Avatar;
