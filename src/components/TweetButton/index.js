import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from './../Icons/fa-icon';
import  './index.scss';

const TweetButton = ({ text,title }) => {
  return (
    <a className="twitter-share-button" rel="noopener noreferrer" target="_blank"
      href={"https://twitter.com/intent/tweet?text=" + text}><FaIcon icon="fa-twitter" />  {title}
      </a>
  );
};

TweetButton.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TweetButton;
