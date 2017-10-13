import React from 'react';
import './index.scss';
import FaIcon from './../Icons/fa-icon';
import PropTypes from 'prop-types';

const BackButton = ({ text }) => {
	return (
		<button className="back-button" onClick={() => window.history.back()}> <FaIcon icon="fa-arrow-left" />{text}</button>
	);
};

BackButton.propTypes = {
	text: PropTypes.string
};

export default BackButton;
