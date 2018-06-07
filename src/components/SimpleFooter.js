import React from 'react';
import PropTypes from 'prop-types';

const SimpleFooter = ({ title }) => (
  <div className="footer" >
    <p>
      Caught a mistake or want to add more courses about {title}?
      <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" >        Check How    </a>
    </p>
  </div>
);

SimpleFooter.propTypes = {
  title: PropTypes.string.isRequired
};

export default SimpleFooter;
