import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-component';

const CourseList = ({ coursesInCategory }) => {
  // function getImage(course) {
  //   const defaultImage = 'https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png';
  //   return !course.image || course.image === '' ? defaultImage : course.image;
  // }

  function getDescription(course) {
    let description = course.description.replace(/^(.{50}[^\s]*).*/, "$1");

    course.description.length > 51 ? description += '...' : '';

    return description;
  }


  const courses = coursesInCategory.map(course => {
    return (
      <li className="course" key={course.title + course.author}>
        <Link to={`/course/${course.id}`}>
          {/* <div className="image">
            <img src={getImage(course)} />
          </div> */}
          <div className="description">
            <h6 className="author">{course.author}</h6>
            <h4 className="title">{course.title}</h4>
            <p className="text-description">{getDescription(course)}</p>
          </div>
        </Link>
        <div className="flags">
          {course.flags ? course.flags.map(flag => <span key={flag} className={"flag-icon " + flag}></span >) : ''}
        </div>
        <div className="categories">
          {course.categories.map(categoryOfCourse => <Link className="tag" to={categoryOfCourse} key={categoryOfCourse}>{categoryOfCourse}</Link>)}
        </div>

      </li>
    );
  });


  const masonryOptions = {
    transitionDuration: 0
  };

  return (
    <Masonry
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // d
      component="ul">
      {courses}
    </Masonry>
  );
};

CourseList.propTypes = {
  coursesInCategory: PropTypes.arrayOf(Object).isRequired
};

export default CourseList;
