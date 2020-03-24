import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import DevIcon from "../../components/Icons/dev-icon";
import Loading from "../../components/Loading";
import SimpleFooter from "../../components/SimpleFooter";
import categories, { Category } from "../../data/categories";
import courses, { Course } from "../../data/courses";
import BackButton from "./../../components/BackButton";
import CourseList from "./course-list";
import "./index.scss";

const renderContribute = (category: Category) => (
  <div style={{ textAlign: "center" }}>
    <p>
      <b style={{ fontSize: "20px" }}>Sorry!</b>
      <br />
      <br />
      We do not have any listed course about {category.title}, yet.
      <br />
      If you have any suggestion and would like to collaborate, please{" "}
      <a
        href="https://github.com/Leocardoso94/Free-Courses"
        rel="noopener noreferrer"
        target="_blank"
      >
        check How
      </a>
    </p>
  </div>
);

const someCategoryIsEqual = (categoryOfCourse: string, category: Category) =>
  categoryOfCourse.toLowerCase() === category.title.toLowerCase();

const filterCoursesByCategory = (course: Course, category: Category) =>
  course.categories.some(categoryOfCourse =>
    someCategoryIsEqual(categoryOfCourse, category)
  );

const getCoursesInCategory = (categoryName: string) => {
  const fallBack = {
    title: categoryName,
    icon: "devicons devicons-code_badge"
  };

  if (categoryName === "all") {
    return {
      coursesInCategory: courses,
      category: { title: "All Courses", icon: "devicons devicons-code_badge" }
    };
  } else {
    const category =
      categories.find(
        ctg => ctg.title.toLowerCase() === categoryName.toLowerCase()
      ) || fallBack;

    return {
      coursesInCategory: courses.filter(course =>
        filterCoursesByCategory(course, category)
      ),
      category
    };
  }
};

const CategoryContainer: FC<{
  courses: Course[];
  loading: boolean;
  allCategories: Category[];
} & RouteComponentProps<{ category: string }>> = ({
  match,
  loading
}) => {
  const categoryName = match.params.category.trim();
  const { coursesInCategory, category } = getCoursesInCategory(categoryName);

  if (loading) return <Loading />;

  return (
    <div className="category">
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
    </div>
  );
};

export default CategoryContainer;
