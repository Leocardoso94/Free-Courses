import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import RoundedButton from './../../components/RoundedButton';
import './index.scss';
import BackButton from './../../components/BackButton';
import { fetchCourses } from './../../actions';

class Course extends Component {
  componentWillMount() {
    this.props.fetchCourses();
  }
  render() {
    const { match: { params: { id } } } = this.props;

    const course = this.props.courses.find(crs => crs.id === id);

    if (!course) return null;


    return (
      <ReactCSSTransitionGroup
        transitionName="initial"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
        component="div"
        className="course-details"
      >
        <BackButton />
        <h1 className="title">{course.title}</h1>
        <h3>Author: {course.author}</h3>
        <h4>Language: {course.language}</h4>
        <h4>Level: {course.level}</h4>
        <p>{course.description}</p>
        <RoundedButton text="check it" link={course.link} />
        <div className="footer">
          <p>
            Caught a mistake or want to contribute to the project?  <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" >Check How</a>
          </p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}


function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps, { fetchCourses })(Course);

Course.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  courses: PropTypes.arrayOf(Object).isRequired,
  fetchCourses: PropTypes.func.isRequired
};
