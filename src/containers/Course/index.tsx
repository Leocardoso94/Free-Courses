import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { findCourseById } from "../../modules/course";
import RoundedButton from "./../../components/RoundedButton";
import "./index.scss";

const CourseContainer: FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const course = findCourseById(match.params.id);

  useEffect(() => {
    if (!course) history.push("/");
  }, [course, history]);

  if (!course) return <div></div>;

  return (
    <div className="course-details">
      <BackButton />
      <h1 className="title">{course.title}</h1>
      <h3>Author: {course.author}</h3>
      <h4>Language: {course.language}</h4>
      <h4>Level: {course.level}</h4>
      <p>{course.description}</p>
      <RoundedButton text="check it" link={course.link} />
      <div className="footer">
        <p>
          Caught a mistake or want to contribute to the project?{" "}
          <a
            href="https://github.com/Leocardoso94/Free-Courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check How
          </a>
        </p>
      </div>
    </div>
  );
};

export default CourseContainer;
