import React from "react";
import PropTypes from "prop-types";
import FaIcon from "../Icons/fa-icon";
import "./index.scss";

interface Props {
  text: string;
  title: string;
}

export const TweetButton: React.FC<Props> = ({ text, title }) => (
  <a
    className=" twitter"
    rel="noopener noreferrer"
    target="_blank"
    href={`https://twitter.com/intent/tweet?text=${text}`}
  >
    <FaIcon icon="fa-twitter" /> {title}
  </a>
);

TweetButton.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export const FaceButton: React.FC<Props> = ({ text, title }) => (
  <a
    className=" face"
    rel="noopener noreferrer"
    target="_blank"
    href={`https://www.facebook.com/sharer/sharer.php?u=${text}`}
  >
    <FaIcon icon="fa-facebook" /> {title}
  </a>
);
