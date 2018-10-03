import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import RoundedButton from './../../components/RoundedButton';
import './index.scss';
import BackButton from './../../components/BackButton';
import { CoursesConsumer } from '../../contexts/Courses';

const Course = ({ match: { params: { id } } }) => (
  <CoursesConsumer>
    {
      ({ findCourseById }) => {
        const course = findCourseById(id);
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
  </CoursesConsumer>
);

Course.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default Course;
