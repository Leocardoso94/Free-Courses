import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DevIcon from './../../components/Icons/dev-icon';
import './index.scss';
import CourseList from './course-list';
import BackButton from './../../components/BackButton';
import { withCourses } from '../../contexts/Courses';
import SimpleFooter from '../../components/SimpleFooter';
import { withCategories } from '../../contexts/Categories';
import Loading from '../../components/Loading';

const renderContribute = category => (
  <div style={{ textAlign: 'center' }}>
    <p>
      <b style={{ fontSize: '20px' }}>Sorry!</b>
      <br />
      <br />
      We do not have any listed course about {category.title}, yet.
      <br />
      If you have any suggestion and would like to collaborate, please
      <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank">
        check How
      </a>
    </p>
  </div>
);

const someCategoryIsEqual = (categoryOfCourse, category) =>
  categoryOfCourse.toLowerCase() === category.title.toLowerCase();

const filterCoursesByCategory = ({ categories }, category) =>
  categories.some(categoryOfCourse => someCategoryIsEqual(categoryOfCourse, category));

const getCoursesInCategory = (categoryName, courses, allCategories) => {
  let coursesInCategory = [];
  let category = {};
  const fallBack = { title: categoryName, icon: 'devicons devicons-code_badge' };

  if (categoryName === 'all') {
    coursesInCategory = courses;
    category = { title: 'All Courses', icon: 'devicons devicons-code_badge' };
  } else {
    category =
      allCategories.find(ctg => ctg.title.toLowerCase() === categoryName.toLowerCase()) ||
      fallBack;
    coursesInCategory = courses.filter(course => filterCoursesByCategory(course, category));
  }
  return { coursesInCategory, category };
};

const Category = ({
  match, courses, allCategories, loading
}) => {
  const categoryName = match.params.category.trim();
  const { coursesInCategory, category } = getCoursesInCategory(categoryName, courses, allCategories);


  if (loading) return <Loading />;


  return (
    <ReactCSSTransitionGroup
      transitionName="initial"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      id="category"
      component="div"
      className="category"
    >
      <BackButton />
      <h1 className="title">
        <DevIcon icon={category.icon} /> {category.title}
      </h1>
      {coursesInCategory.length === 0 ? (
        renderContribute(category)
      ) : (
        <CourseList coursesInCategory={coursesInCategory} />
      )}
      <SimpleFooter title={category.title} />
    </ReactCSSTransitionGroup>
  );
};

Category.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  courses: PropTypes.arrayOf(Object).isRequired,
  allCategories: PropTypes.arrayOf(Object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default withCategories(withCourses(Category));
