import React from 'react';
import './index.scss';
import FaIcon from './../Icons/fa-icon';
import PropTypes from 'prop-types';

const BackButton = ({ text }) => {
	return (
		<a className="back-button" onClick={() => window.history.back()}> <FaIcon icon="fa-arrow-left" />{text}</a>
	);
};

BackButton.propTypes = {
	text: PropTypes.string
};

export default BackButton;
