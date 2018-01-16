import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';

const Contributor = ({ contributor, index }) => (
  <Fade delay={100 * index}>
    <li className="contributor">
      <img className="avatar" src={contributor.avatar_url} alt={contributor.login} />
      <a
        target="_blank"
        className="contributor__link"
        href={contributor.html_url}
      >{contributor.login}
      </a>
    </li>
  </Fade>
);

Contributor.propTypes = {
  contributor: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Contributor;
