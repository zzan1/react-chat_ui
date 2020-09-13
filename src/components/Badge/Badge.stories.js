import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI Component/Badge",
  component: Badge,
};

export const Dot = () => {
  return (
    <Badge show={true}>
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ fontSize: "40px", color: "blue" }}
      />
    </Badge>
  );
};

export const Default = () => {
  return <Badge count={5} showCount={true}></Badge>;
};
