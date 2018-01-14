import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import CoursesReducer from './reducer_courses';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  courses: CoursesReducer
});

export default rootReducer;
