import React from "react"; //rfcp
import PropTypes from "prop-types";
import face1 from "../../assets/images/face-male-1.jpg";
import {
  WrapperAvatar,
  StatusAvatar,
  ImgWrapperAvatar,
  PortraitAvatar,
} from "./style";
import theme from "../../theme";

// 使用 ...rest 来接受剩下的对象元素，组成一个名字为 rest 的数组；
// 如果直接在 <WrapperAvatar {rest}> <WrapperAvatar rest> 都不能传参数;
// 可以使用 <WrapperAvatar rest={rest}> <WrapperAvatar {...rest}>，后面是吧元素分出来，组成新的属性

// 这些样式只能接受自己的参数，不能接受上一级的参数;

function Avatar({ portraitFile, size, status, ...rest }) {
  const statusCircleSize = Math.ceil(Number.parseInt(size) / 8);
  const statusPosition = Math.ceil(Number.parseInt(size) / 10);
  return (
    <WrapperAvatar {...rest}>
      {status !== "remove" && (
        <StatusAvatar
          status={status === "online" ? theme.green : "red"}
          statusCircleSize={statusCircleSize}
          statusPosition={statusPosition}
        ></StatusAvatar>
      )}
      <ImgWrapperAvatar size={size}>
        <PortraitAvatar src={portraitFile} alt="" />
      </ImgWrapperAvatar>
    </WrapperAvatar>
  );
}

Avatar.propTypes = {};

export default Avatar;
