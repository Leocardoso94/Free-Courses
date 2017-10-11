import React from 'react';

const componentName = () => {
	return (
		<button className="back-button" onClick={() => window.history.back()}>
			Back
		</button>
	);
};

export default componentName;
