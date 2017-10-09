import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevIcon from './../../components/Icons/dev-icon';
import courses from './../../data/courses.json';
import List from './../../components/List/list';

class Category extends Component {
	constructor(props) {
		super(props);

		this.state = { courses };
	}

	renderCourses(coursesInCategory) {
		return (
			<div>
				<List list={coursesInCategory} selectCourse={this.props.selectCourse} />
				<div className="footer">
					<p>
						Caught a mistake or want to add more courses of {this.props.category.title}?  <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">Check How</a>
					</p>
				</div>
			</div>
		);
	}

	renderContribute() {
		return (
			<div style={{ textAlign: "center" }}>
				<p>
					<b style={{ fontSize: '20px' }}>Sorry!</b>
					<br />
					<br />
					We don't have any listed course about {this.props.category.title}, yet.
					<br />
					If you have any suggestion and would like to collaborate, please <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">check How</a>
				</p>
			</div>
		);
	}

	render() {
		const category = this.props.category;

		const coursesInCategory = this.state.courses.filter(course => {
			return course.categories.some(categoryOfCourse => categoryOfCourse.toLowerCase() === category.title.toLowerCase());
		});


		return (
			<div id="category" className="category" >
				<h1 className="title"><DevIcon icon={category.icon} /> {category.title}</h1>
				{coursesInCategory.length === 0 ? this.renderContribute() : this.renderCourses(coursesInCategory)}
			</div>
		);
	}
}

Category.propTypes = {
	category: PropTypes.object,
	selectCourse: PropTypes.func.isRequired
};

export default Category;
