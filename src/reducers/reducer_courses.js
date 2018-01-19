import snakeCase from 'lodash.snakecase';
import courses from './../data/courses.json';

courses.forEach((course) => {
  course.id = snakeCase(course.title + course.author);
  if (typeof course.categories === 'string') { course.categories = course.categories.replace(/ *, */g, ',').split(','); }
  if (typeof course.flags === 'string') { course.flags = course.flags.split(','); }
});

const reversed = courses.slice(0).reverse();

export default function () {
  return reversed;
}
