import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import FaIcon from './../../components/Icons/fa-icon';
import Category from './category';
import Course from './course';

class Content extends Component {

	closeSideBar(){
		document.querySelector('.sidebar').classList.remove('open');
		document.querySelector('#menu-button').classList.remove('active');
	}

	welcome() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1 className="title">Free Courses to Developers</h1>
				<p>
					<b>Welcome!</b>
					<br />
					<br />
					This is a list of free courses about programming.
					<br />
					You can contribute to the project adding more courses <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leocardoso94">here</a>
					<br />
					<br />
					<span >Made with <FaIcon icon="fa-heart" color="red" /> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leocardoso94">@LeoCardoso94</a></span>
				</p>
			</div>
		);
	}


	render() {
		return (
			<div className="content" onClick={() => this.closeSideBar()}>
				{this.props.selectedCourse ? <Course course={this.props.selectedCourse} /> : this.props.category ? <Category category={this.props.category} selectCourse={this.props.selectCourse} /> : this.welcome()}
			</div>
		);
	}
}



Content.propTypes = {
	course: PropTypes.object,
	category: PropTypes.object,
	selectCourse: PropTypes.func.isRequired,
	selectedCourse: PropTypes.object
};

export default Content;
