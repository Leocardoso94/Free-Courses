import React from 'react';
import { CourseProvider } from './Courses';
/* eslint react/prop-types: 0 */
const ContextProvider = ({ children }) => <CourseProvider>{children}</CourseProvider>;

export default ContextProvider;
