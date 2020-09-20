import React from "react";
import Icon from ".";
import { ReactComponent as SmileFace } from "assets/icons/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// SVG 可以直接导出成一个 react 组件，
export default {
  title: "UI Component/Icon",
  component: Icon,
};

export const Default = () => {
  return (
    <div>
      <Icon icon={SmileFace} color="red" />
      <Icon icon={SmileFace} />
      <Icon icon={SmileFace} opacity="0.5" />
      <Icon icon={SmileFace} width="34" />
      <Icon icon={SmileFace} height="34" />
    </div>
  );
};

// fontawesome 组件的使用，通过 css 来确定颜色和大小
export const FontAweSome = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCommentDots} />
      <FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }} />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ color: "#cccccc", fontSize: "48px" }}
      />
    </div>
  );
};
