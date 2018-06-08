import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true
};

const CourseList = ({ coursesInCategory }) => {
  function getImage(course) {
    const defaultImage = 'https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png';
    return !course.image || course.image === '' ? defaultImage : course.image;
  }

  const renderTags = course =>
    course.categories.map(categoryOfCourse => (
      <Link className="tag" to={categoryOfCourse} key={categoryOfCourse}>
        {categoryOfCourse}
      </Link>
    ));

  const courses = coursesInCategory.map(course => (
    <li className="course" key={course.title + course.author}>
      <Link to={`/course/${course.id}`}>
        <div className="image">
          <img src={getImage(course)} alt={course.title} />
        </div>
        <div className="description">
          <h6 className="author">{course.author}</h6>
          <h4 className="title">{course.title}</h4>
          <p className="text-description">{course.description}</p>
        </div>
      </Link>
      <div className="flags">
        {course.flags
          ? course.flags.map(flag => <span key={flag} className={`flag-icon ${flag}`} />)
          : ''}
      </div>
      <div className="categories">{renderTags(course)}</div>
    </li>
  ));

  return (
    <Masonry
      elementType="ul"
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad
    >
      {courses}
    </Masonry>
  );
};

CourseList.propTypes = {
  coursesInCategory: PropTypes.arrayOf(Object).isRequired
};

export default CourseList;
