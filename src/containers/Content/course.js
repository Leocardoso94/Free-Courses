import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoundedButton from './../../components/RoundedButton';

class Course extends Component {
	getImage() {
		const defaultImage = 'https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png';
		return !this.props.course.image || this.props.course.image === '' ? defaultImage : this.props.course.image;
	}
	render() {
		return (
			<div className="course-details">
				<h1 className="title">{this.props.course.title}</h1>
				<img src={this.getImage()} />
				<h3>Author: {this.props.course.author}</h3>
				<h4>Language: {this.props.course.language}</h4>
				<h4>Level: {this.props.course.level}</h4>
				<p>{this.props.course.description}</p>
				<RoundedButton text="check it" link={this.props.course.link} />
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
	course: PropTypes.object.isRequired
};

export default Course;
