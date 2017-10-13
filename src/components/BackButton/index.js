import React from 'react';
import './index.scss';
import FaIcon from './../Icons/fa-icon';

const componentName = () => {
	return (
		<button className="back-button" onClick={() => window.history.back()}> <FaIcon icon="fa-arrow-left" />  back</button>
	);
};

export default componentName;
