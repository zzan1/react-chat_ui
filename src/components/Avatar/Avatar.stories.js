import React from "react";
import Avatar from ".";
import face1 from "../../assets/images/face-male-1.jpg";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Default = (args) => {
  return <Avatar {...args} />;
};
export const test = () => {
  return (
    <div>
      <Avatar portraitFile={face1} size="40px" status="online" />
      <Avatar portraitFile={face1} size="60px" status="Offline" />
      <Avatar portraitFile={face1} size="80px" status="remove" />
      <Avatar portraitFile={face1} size="100px" status="online" />
      <Avatar portraitFile={face1} size="120px" status="offline" />
      <Avatar portraitFile={face1} size="140px" status="remove" />
    </div>
  );
};
export const Primary = Default.bind({});
Primary.args = {
  size: "80px",
  portraitFile: face1,
  status: true,
  name: "wang",
};
