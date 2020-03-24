import React from 'react';
import { CourseProvider } from './Courses';
import { CategoriesProvider } from './Categories';
/* eslint react/prop-types: 0 */
const ContextProvider: React.FC = ({ children }) => (
  <CourseProvider>
    <CategoriesProvider>
      {children}
    </CategoriesProvider>
  </CourseProvider>
);

export default ContextProvider;
