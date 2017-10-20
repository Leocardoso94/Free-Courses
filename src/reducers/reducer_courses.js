import courses from './../data/courses.json';
courses.forEach((course, index) => {
  course.id = index;
  if (typeof course.categories === 'string')
    course.categories = course.categories.split(' ');
});

export default function () {
  return courses;
}
