import React, { Component, createContext } from 'react';
import snakeCase from 'lodash.snakecase';
import courses from './../data/courses.json';

const Course = createContext();
/* eslint react/prop-types: 0 */

export class CourseProvider extends Component {
  state = {
    courses: courses.map((course) => {
      const obj = {};
      obj.id = snakeCase(course.title + course.author);
      if (typeof course.categories === 'string') { obj.categories = course.categories.replace(/ *, */g, ',').split(','); }
      if (typeof course.flags === 'string') { obj.flags = course.flags.split(','); }

      return Object.assign(course, obj);
    }).slice(0).reverse()
  }

  render() {
    return (
      <Course.Provider
        value={{
          courses: this.state.courses
        }}
      >
        {this.props.children}
      </Course.Provider>
    );
  }
}


export const CoursesConsumer = Course.Consumer;
