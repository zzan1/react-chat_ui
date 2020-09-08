---
to: src/components/<%= name%>/index.js
---

import React from "react"; //rfcp
import PropTypes from "prop-types";
import Wrapper<%= name%> from "./style";

function <%= name%>({ children, ...rest }) {
  return (
    <Wrapper<%= name%> {...rest}>
      {children}
    </Wrapper<%= name%>>
  );
}

<%= name%>.propTypes = {
    children: PropTypes.any
};

export default <%= name%>;
