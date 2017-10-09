import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const RoundedButton = ({ color, backgroundColor, text, link, borderColor }) => (
	<a href={link} target="_blank" className="rounded-button" style={{ backgroundColor, color, borderColor }}>{text}</a >
);

RoundedButton.propTypes = {
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	text: PropTypes.string.isRequired,
	link: PropTypes.string,
	borderColor: PropTypes.string
};

export default RoundedButton;
