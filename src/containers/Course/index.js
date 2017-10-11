import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoundedButton from './../../components/RoundedButton';
import  './index.scss';

import courses from './../../data/courses.json';
courses.forEach((course, index) => {
	course.id = index;
});

class Course extends Component {
	getImage(course) {
		const defaultImage = 'https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png';
		return !course.image || course.image === '' ? defaultImage : course.image;
	}
	render() {
		const id = this.props.match.params.id;

		const course = courses.find((crs) => crs.id == id);

		return (
			<div className="course-details">
				<h1 className="title">{course.title}</h1>
				<img src={this.getImage(course)} />
				<h3>Author: {course.author}</h3>
				<h4>Language: {course.language}</h4>
				<h4>Level: {course.level}</h4>
				<p>{course.description}</p>
				<RoundedButton text="check it" link={course.link} />
				<div className="footer">
					<p>
						Caught a mistake or want to contribute to the project?  <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">Check How</a>
					</p>
				</div>
			</div>
		);
	}
}

Course.propTypes = {
	match: PropTypes.object.isRequired
};

export default Course;
