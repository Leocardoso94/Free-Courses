import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DevIcon from './../../components/Icons/dev-icon';
import courses from './../../data/courses.json';
import categories from './../../data/categories.json';
import './index.scss';

courses.forEach((course, index) => {
	course.id = index;
});

class Category extends Component {

	constructor(props) {
		super(props);

		this.state = { courses };
	}

	getImage(course) {
		const defaultImage = 'https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png';
		return !course.image || course.image === '' ? defaultImage : course.image;
	}

	getDescription(course) {
		let description = course.description.replace(/^(.{50}[^\s]*).*/, "$1");

		course.description.length > 51 ? description += '...' : '';

		return description;
	}

	renderCourses(coursesInCategory, category) {
		return (
			<div>
				<ul>
					{coursesInCategory.map(course => {
						return (
							<li className="course" key={course.title + course.author}>
								<Link to={`/course/${course.id}`}>
									<div className="image">
										<img src={this.getImage(course)} />
									</div>
									<div className="description">
										<h6 className="author">{course.author}</h6>
										<h4 className="title">{course.title}</h4>
										<p className="text-description">{this.getDescription(course)}</p>
									</div>
									<div className="categories">
										{course.categories.map(categoryOfCourse => <i key={categoryOfCourse}>{categoryOfCourse}</i>)}
									</div>
								</Link>
							</li>
						);
					})}

				</ul>
				<div className="footer">
					<p>
						Caught a mistake or want to add more courses of {category.title}?  <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">Check How</a>
					</p>
				</div>
			</div>
		);
	}

	renderContribute(category) {
		return (
			<div style={{ textAlign: "center" }}>
				<p>
					<b style={{ fontSize: '20px' }}>Sorry!</b>
					<br />
					<br />
					We don't have any listed course about {category.title}, yet.
					<br />
					If you have any suggestion and would like to collaborate, please <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">check How</a>
				</p>
			</div>
		);
	}

	render() {
		const categoryName = this.props.match.params.category;

		const category = categories.find((ctg) => ctg.title === categoryName);

		const coursesInCategory = this.state.courses.filter(course => {
			return course.categories.some(categoryOfCourse => categoryOfCourse.toLowerCase() === category.title.toLowerCase());
		});


		return (
			<div id="category" className="category" >
				<h1 className="title"><DevIcon icon={category.icon} /> {category.title}</h1>
				{coursesInCategory.length === 0 ? this.renderContribute(category) : this.renderCourses(coursesInCategory, category)}
			</div>
		);
	}
}

Category.propTypes = {
	match: PropTypes.object.isRequired
};

export default Category;
