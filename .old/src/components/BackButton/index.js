import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';
import FaIcon from './../Icons/fa-icon';

const BackButton = ({ text }) => (
  <button
    className="back-button"
    onClick={() => window.history.back()}
  >
    <FaIcon
      icon="fa-arrow-left"
    />
    {text}
  </button>
);

BackButton.propTypes = {
  text: PropTypes.string
};

BackButton.defaultProps = {
  text: ''
};

export default BackButton;
