import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const RoundedButton = ({ text, link }) => (
  <a href={link} target="_blank" className="rounded-button button">{text}</a >
);

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default RoundedButton;
