import courses from './../data/courses.json';
courses.forEach((course, index) => {
  course.id = index;
  if (typeof course.categories === 'string')
    course.categories = course.categories.split(',');
  if (typeof course.flags === 'string')
    course.flags = course.flags.split(',');
});

export default function () {
  return courses;
}
