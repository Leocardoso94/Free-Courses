import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../../data/courses";

const defaultImage =
  "https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png";

function getImage(course: Course) {
  return !course.image || course.image === "" ? defaultImage : course.image;
}

const CourseList: React.FC<{ coursesInCategory: Course[] }> = ({
  coursesInCategory,
}) => {
  const renderTags = (course: Course) =>
    course.categories.map((categoryOfCourse) => (
      <Link className="tag" to={categoryOfCourse} key={categoryOfCourse}>
        {categoryOfCourse}
      </Link>
    ));

  const courses = coursesInCategory.map((course) => (
    <li className="course" key={course.title + course.author}>
      <Link to={`/course/${course.id}`}>
        <div className="image">
          <img
            src={getImage(course)}
            alt={course.title}
            onError={(e) => {
              //@ts-ignore
              e.target.src = defaultImage;
            }}
          />
        </div>
        <div className="description">
          <h6 className="author">{course.author}</h6>
          <h4 className="title">{course.title}</h4>
          <p className="text-description">{course.description}</p>
        </div>
      </Link>
      <div className="flags">
        {course.flags
          ? course.flags.map((flag) => (
              <span key={flag} className={`flag-icon ${flag}`} />
            ))
          : ""}
      </div>
      <div className="categories">{renderTags(course)}</div>
    </li>
  ));

  return <ul>{courses}</ul>;
};

export default CourseList;
