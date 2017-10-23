import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DevIcon from './../../components/Icons/dev-icon';
import './index.scss';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import CourseList from './course-list';
import BackButton from './../../components/BackButton';

class Category extends Component {

	renderContribute(category) {
		return (
			<div style={{ textAlign: "center" }}>
				<p>
					<b style={{ fontSize: '20px' }}>Sorry!</b>
					<br />
					<br />
					We do not have any listed course about {category.title}, yet.
					<br />
					If you have any suggestion and would like to collaborate, please <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">check How</a>
				</p>
			</div>
		);
	}

	render() {
		const categoryName = this.props.match.params.category.trim();
		let coursesInCategory = [];
		let category = {};

		if (categoryName === 'all') {
			coursesInCategory = this.props.courses;
			category = { title: "All Courses", icon: "devicons devicons-code_badge" };
		} else {
			if (this.props.categories.some(ctg => ctg.title.toLowerCase() === categoryName.toLowerCase())) {
				category = this.props.categories.find((ctg) => ctg.title.toLowerCase() === categoryName.toLowerCase());
			}
			else {
				category = { title: categoryName, icon: "devicons devicons-code_badge" };
			}

			coursesInCategory = this.props.courses.filter(course => {
				return course.categories.some(categoryOfCourse => categoryOfCourse.toLowerCase() === category.title.toLowerCase());
			});
		}

		return (
			<ReactCSSTransitionGroup
				transitionName="initial"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}
				id="category"
				component="div"
				className="category" >
				<BackButton />
				<h1 className="title"> <DevIcon icon={category.icon} /> {category.title}</h1>
				{coursesInCategory.length === 0 ? this.renderContribute(category) : < CourseList coursesInCategory={coursesInCategory} />}
				<div className="footer" >
					<p>
						Caught a mistake or want to add more courses about {category.title}?  <a href="https://github.com/Leocardoso94/Free-Courses" target="_blank" rel="noopener noreferrer">Check How</a>
					</p>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}

function mapStateToProps(state) {
	return {
		courses: state.courses,
		categories: state.categories
	};
}


export default connect(mapStateToProps)(Category);

Category.propTypes = {
	match: PropTypes.object.isRequired,
	courses: PropTypes.arrayOf(Object),
	categories: PropTypes.arrayOf(Object)
};
