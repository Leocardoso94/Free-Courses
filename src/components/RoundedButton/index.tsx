import React, { FC } from "react";
import "./index.scss";

const RoundedButton: FC<{
  text: string;
  link: string;
}> = ({ text, link }) => (
  <a href={link} target="_blank" className="rounded-button button">
    {text}
  </a>
);

export default RoundedButton;
