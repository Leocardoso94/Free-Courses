import React from "react";

const FaIcon: React.FC<{ color?: string; icon: string }> = ({
  color,
  icon
}) => <i className={`fa ${icon}`} aria-hidden="true" style={{ color }} />;

export default FaIcon;
