import React from 'react';
import { CourseProvider } from './Courses';
import { CategoriesProvider } from './Categories';
/* eslint react/prop-types: 0 */
const ContextProvider = ({ children }) => (
  <CourseProvider>
    <CategoriesProvider>
      {children}
    </CategoriesProvider>
  </CourseProvider>
);

export default ContextProvider;
