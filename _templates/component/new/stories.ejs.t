---
to: src/components/<%= name%>/<%= name%>.stories.js
---

import React from "react";
import <%= name%> from ".";

export default {
  title: "<%= name%>",
  component: <%= name%>,
};

export const Default = (args) => {
  return <<%= name%> {...args}>默认效果</<%= name%>>;
};