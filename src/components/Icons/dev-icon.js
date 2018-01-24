import React from 'react';
import PropTypes from 'prop-types';

const DevIcon = ({ icon }) => (
  <i className={icon} style={{ fontSize: '25px' }} />
);

DevIcon.propTypes = {
  icon: PropTypes.string.isRequired
};


export default DevIcon;
