import React from "react";
import Navbar, { MenuItem } from ".";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI Components/Navbar",
  component: Navbar,
};

export const Defaut = () => {
  return (
    <div>
      <Navbar portrait={face1} />
    </div>
  );
};

export const MenuItems = () => {
  return (
    <div
      css={`
        width: 100px;
        background-color: ${(props) => props.theme.darkPurple};
      `}
    >
      <MenuItem icon={faCoffee} active showBadge />
    </div>
  );
};
