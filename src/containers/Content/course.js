import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoundedButton from './../../components/RoundedButton';

class Course extends Component {
	render() {
		return (
			<div>
				<h1 className="title">{this.props.course.title}</h1>
				<h3>Author: {this.props.course.author}</h3>
				<h4>Language: {this.props.course.language}</h4>
				<h4>Level: {this.props.course.level}</h4>
				<p>{this.props.course.description}</p>
				<RoundedButton text="check it" link={this.props.course.link} />
				<div className="footer">
					<p>
						Caught a mistake or want to contribute to the project?  <a href="https://github.com/leocardoso94/" target="_blank" rel="noopener noreferrer">Check How</a>
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
