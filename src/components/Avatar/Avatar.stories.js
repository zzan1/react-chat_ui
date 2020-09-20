import React from "react";
import Avatar from ".";
import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI Components/Avatar",
  component: Avatar,
};

export const Defaut = () => {
  return (
    <div>
      <Avatar portrait={face1} status showStatus size="80px" />
      <Avatar portrait={face1} status={false} showStatus size="100px" />
      <Avatar portrait={face1} status={false} showStatus={false} size="200px" />
    </div>
  );
};
