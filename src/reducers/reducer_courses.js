import courses from './../data/courses.json';
courses.forEach((course, index) => {
	course.id = index;
});

export default function () {
	return courses;
}
