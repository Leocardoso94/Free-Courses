import React, { createContext } from 'react';
import snakeCase from 'lodash.snakecase';
import { API_URL } from '../utils';

const Course = createContext();
/* eslint react/prop-types: 0 */
/* eslint react/no-unused-state: 0 */

export class CourseProvider extends React.Component {
  state = {
    courses: [],
    findCourseById: id => this.state.courses.find(crs => crs.id === id),
    loading: true
  };

  componentDidMount = async () => {
    const courses = await (await fetch(`${API_URL}/courses.json`)).json();

    this.setState({
      loading: false,
      courses: courses
        .map((course) => {
          const obj = {};
          obj.id = snakeCase(course.title + course.author);
          if (typeof course.categories === 'string') {
            obj.categories = course.categories.replace(/ *, */g, ',').split(',');
          }
          if (typeof course.flags === 'string') {
            obj.flags = course.flags.split(',');
          }

          return Object.assign(course, obj);
        })
        .slice(0)
        .reverse()
    });
  };

  render() {
    return <Course.Provider value={this.state}>{this.props.children}</Course.Provider>;
  }
}

export const CoursesConsumer = Course.Consumer;

// This function takes a component...
export const withCourses = Component => props => (
  <CoursesConsumer>
    {({ courses, findCourseById, loading }) => (
      <Component {...props} courses={courses} findCourseById={findCourseById} loading={loading} />
    )}
  </CoursesConsumer>
);
