import React from "react"; //rfcp
import PropTypes from "prop-types";
import WrapperIcon from "./style";

// 这里的 icon 只能用于传递参数的时候，实际在 jsx 中使用还是后面的值，前面的是方便向这个组件传值
function Icon({
  icon: IconSvgComponent,
  width = 24,
  height = 24,
  color = "black",
  opacity = 1,
  ...rest
}) {
  return (
    <WrapperIcon color={color} opacity={opacity} {...rest}>
      {IconSvgComponent && <IconSvgComponent width={width} height={height} />}
    </WrapperIcon>
  );
}
// svg 组件需要给它一个宽高，默认是 20

Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;

// yarn add @fortawesome/react-fontawesome 
// yarn add @fortawesome/fontawesome-svg-core
// yarn add @fortawesome/free-brands-svg-icons
// yarn add @fortawesome/free-regular-svg-icons 空心图标库
// yarn add @fortawesome/free-solid-svg-icons 实心图标库