import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI Components/Badge",
  component: Badge,
};

export const Defaut = () => {
  return (
    <div>
      <Badge variant="dot" showBadgeDot>
        <FontAwesomeIcon icon={faCoffee} />
      </Badge>
      <Badge variant="dot">
        <FontAwesomeIcon icon={faCoffee} />
      </Badge>
    </div>
  );
};
export const Number = () => {
  return (
    <div>
      <Badge variant="number" badgeNumber={5} showBadgeNumber />
      <Badge variant="number" badgeNumber={0} showBadgeNumber={false} />
      <Badge variant="number" badgeNumber={5} />
    </div>
  );
};
