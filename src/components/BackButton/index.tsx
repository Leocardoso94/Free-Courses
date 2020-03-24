import React from "react";
import FaIcon from "../Icons/fa-icon";
import "./index.scss";

const BackButton: React.FC = ({ children }) => (
  <button className="back-button" onClick={() => window.history.back()}>
    <FaIcon icon="fa-arrow-left" />
    {children}
  </button>
);

export default BackButton;
