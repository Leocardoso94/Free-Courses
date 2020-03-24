import React from "react";

const DevIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <i className={icon} style={{ fontSize: "25px" }} />
);

export default DevIcon;
