import courses from './../data/courses.json';
import snakeCase from 'lodash.snakecase';

courses.forEach((course) => {
  course.id = snakeCase(course.title + course.author);
  if (typeof course.categories === 'string')
    {course.categories = course.categories.replace(/ *, */g, ',').split(',');}
  if (typeof course.flags === 'string')
    {course.flags = course.flags.split(',');}
});

export default function () {
  return courses;
}
