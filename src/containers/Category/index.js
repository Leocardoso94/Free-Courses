import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DevIcon from './../../components/Icons/dev-icon';
import './index.scss';
import CourseList from './course-list';
import BackButton from './../../components/BackButton';
import categories from './../../data/categories.json';
import { CoursesConsumer } from '../../contexts/Courses';
import SimpleFooter from '../../components/SimpleFooter';

const renderContribute = category => (
  <div style={{ textAlign: 'center' }}>
    <p>
      <b style={{ fontSize: '20px' }}>Sorry!</b>
      <br />
      <br />
      We do not have any listed course about {category.title}, yet.
      <br />
      If you have any suggestion and would like to collaborate, please
      <a
        href="https://github.com/Leocardoso94/Free-Courses"
        target="_blank"
      >check How
      </a>
    </p>
  </div>
);

const getCoursesInCategory = (categoryName, courses) => {
  let coursesInCategory = [];
  let category = {};
  const fallBack = { title: categoryName, icon: 'devicons devicons-code_badge' };

  if (categoryName === 'all') {
    coursesInCategory = courses;
    category = { title: 'All Courses', icon: 'devicons devicons-code_badge' };
  } else {
    category = categories
      .find(ctg =>
        ctg.title.toLowerCase() === categoryName.toLowerCase()) || fallBack;

    coursesInCategory = courses
      .filter(course => course.categories
        .some(categoryOfCourse =>
          categoryOfCourse.toLowerCase() === category.title.toLowerCase()));
  }
  return { coursesInCategory, category };
};

const Category = ({ match }) => (
  <CoursesConsumer>
    {({ courses }) => {
      const categoryName = match.params.category.trim();
      const { coursesInCategory, category } = getCoursesInCategory(categoryName, courses);

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
          <h1 className="title"> <DevIcon icon={category.icon} /> {category.title}</h1>
          {
            coursesInCategory.length === 0
              ? renderContribute(category)
              : <CourseList coursesInCategory={coursesInCategory} />
          }
          <SimpleFooter title={category.title} />
        </ReactCSSTransitionGroup>
      );
    }}
  </CoursesConsumer>
);


export default Category;

Category.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
