import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevIcon from './../../components/Icons/dev-icon';
import courses from './../../data/courses.json';
import categories from './../../data/categories.json';
import './index.scss';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import CourseList from './course-list';

courses.forEach((course, index) => {
	course.id = index;
});

class Category extends Component {

	constructor(props) {
		super(props);

		this.state = { courses };
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
			<ReactCSSTransitionGroup
				transitionName="initial"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}>
				<div id="category" className="category" >
					<h1 className="title"><DevIcon icon={category.icon} /> {category.title}</h1>
					{coursesInCategory.length === 0 ? this.renderContribute(category) : < CourseList coursesInCategory={coursesInCategory}  />}
					<div className="footer">
						<p>
							Caught a mistake or want to add more courses about {category.title}?  <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">Check How</a>
						</p>
					</div>
				</div>

			</ReactCSSTransitionGroup>
		);
	}
}


Category.propTypes = {
	match: PropTypes.object.isRequired
};

export default Category;
