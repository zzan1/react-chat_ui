import React from "react";
import Navbar, { MenuItem } from ".";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Page Component/Navbar",
  component: Navbar,
};

export const Default = (args) => {
  return <Navbar {...args}>默认效果</Navbar>;
};

export const MenuItemDefault = () => {
  return (
    // <div style={{ width: "100px", background: "#292F4C" }}>
    //   <MenuItem icon={faCommentDots} showBadge active></MenuItem>
    //   <MenuItem icon={faCommentDots} showBadge active={false}></MenuItem>
    // </div>
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem icon={faCommentDots} showBadge active></MenuItem>
      <MenuItem icon={faCommentDots} showBadge active={false}></MenuItem>
    </div>
  );
};

// 在story 中定义一个 css 样式可以通过：
// 1. react 的 style 样式；
// 2. 可以定义一个 styled 样式组件，到到这里来用。
// 如果想用 theme
// 那么需要：
// 1. 使用 css styled component 的函数，和 styled 使用的语法一致，但是需要 babel 的插件支持
// macro 解决了 creat-react-app 这种封闭环境中加载其他插件的问题。react默认支持，但是 story 不支持。
