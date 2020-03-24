import React, { createContext } from "react";

import courses from "../data/courses";

const initialState = {
  courses: courses,
  loading: true
};

const Course = createContext(initialState);
/* eslint react/prop-types: 0 */
/* eslint react/no-unused-state: 0 */

export class CourseProvider extends React.Component {
  state = initialState;

  render() {
    return (
      <Course.Provider value={this.state}>
        {this.props.children}
      </Course.Provider>
    );
  }
}

export const CoursesConsumer = Course.Consumer;
