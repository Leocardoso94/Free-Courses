import React from 'react';
import PropTypes from 'prop-types';

const DevIcon = ({ icon }) => (
  <i className={icon} style={{ fontSize: '25px' }} />
);

DevIcon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired
};

DevIcon.defaultProps = {
  color: 'black'
};

export default DevIcon;
