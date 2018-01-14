import React from 'react';
import PropTypes from 'prop-types';

const FaIcon = ({ color, icon }) => (
  <i className={`fa ${icon}`} aria-hidden="true" style={{ color }} />
);

FaIcon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default FaIcon;
