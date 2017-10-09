import React from 'react';
import PropTypes from 'prop-types';

const DevIcon = ({ color, icon }) => (
	<i className={icon} style={{ color, fontSize: '25px' }} />
);

DevIcon.propTypes = {
	color: PropTypes.string,
	icon: PropTypes.string.isRequired
};

export default DevIcon;
