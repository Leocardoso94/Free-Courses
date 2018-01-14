const fs = require('fs');
const categories = require('./src/data/categories.json').sort((a, b) => (a.title < b.title ? -1 : 1));
const courses = require('./src/data/courses.json').sort((a, b) => (a.title < b.title ? -1 : 1));

courses.forEach((course) => {
  if (typeof course.categories === 'string') course.categories = course.categories.replace(/ *, */g, ',').split(',');
});


let string = `# Free Courses to Developers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
 [![GitHub issues](https://img.shields.io/github/issues/Leocardoso94/Free-Courses.svg)](https://github.com/Leocardoso94/Free-Courses/issues) [![GitHub forks](https://img.shields.io/github/forks/Leocardoso94/Free-Courses.svg)](https://github.com/Leocardoso94/Free-Courses/network) [![GitHub stars](https://img.shields.io/github/stars/Leocardoso94/Free-Courses.svg)](https://github.com/Leocardoso94/Free-Courses/stargazers) [![GitHub license](https://img.shields.io/github/license/Leocardoso94/Free-Courses.svg)](https://github.com/Leocardoso94/Free-Courses/blob/master/LICENSE)

https://freecourses.github.io/

Freecourses is a platform which offers a collection of free course links for various development languages and frameworks. You will find every course which is listed here is either free or trial version for learning. So enjoy the content.

## Contribute

You can also contribute to the project. Check below different ways for contributions please check in [CONTRIBUTING.md](https://github.com/Leocardoso94/Free-Courses/blob/master/CONTRIBUTING.md)

--------------------
 # Contents \n\n
`;
const findCoursesInCategory = (categoryTitle = '') => courses.filter(course => course.categories.some(categoryOfCourse => categoryOfCourse.toLowerCase() === categoryTitle.toLowerCase()));


const writeCourse = (coursesInCategory = []) => {
  coursesInCategory.forEach((course) => {
    string += `- [${course.title}](${course.link})\n\n\t- ${course.description}\n\n`;
  });
};

categories.forEach((category) => {
  const coursesInCategory = findCoursesInCategory(category.title);

  if (coursesInCategory.length > 0) {
    string += `- [${category.title}](#${category.title.replace(' ', '-').toLowerCase()})\n`;
  }
});

categories.forEach((category) => {
  const coursesInCategory = findCoursesInCategory(category.title);

  if (coursesInCategory.length > 0) {
    string += `### ${category.title}\n\n`;
    writeCourse(coursesInCategory);
  }
});


string += `
------------------
### If you like the project and want to make a donation, buy me a coffee


<a href="https://www.buymeacoffee.com/leocardoso"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"  target="_blank"></a>

`;


fs.writeFile('./README.md', string, () => {
  console.log('finish');
});
