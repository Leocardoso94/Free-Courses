import React from 'react';
import PropTypes from 'prop-types';

const FaIcon = ({ color, icon }) => (
  <i className={`fa ${icon}`} aria-hidden="true" style={{ color }} />
);

FaIcon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired
};

FaIcon.defaultProps = {
  color: ''
};

export default FaIcon;
