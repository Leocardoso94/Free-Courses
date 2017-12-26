import React from 'react';
import PropTypes from 'prop-types';

const Contributor = ({ contributor }) => {
	return (
		<li className="contributor">
			<img className="avatar" src={contributor.avatar_url} />
			<a target="_blank" className="contributor__link"  href={contributor.html_url} >@{contributor.login}</a>
		</li>
	);
};

Contributor.propTypes = {
	contributor: PropTypes.object.isRequired
};

export default Contributor;
