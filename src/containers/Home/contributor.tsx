import React from "react";
//@ts-ignore

import { IContributor } from ".";

const Contributor: React.FC<{ contributor: IContributor }> = ({
  contributor
}) => (
  <li className="contributor">
    <img
      className="avatar"
      src={contributor.avatar_url}
      alt={contributor.login}
    />
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="contributor__link"
      href={contributor.html_url}
    >
      {contributor.login}
    </a>
  </li>
);

export default Contributor;
