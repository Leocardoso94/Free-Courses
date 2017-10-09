import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import FaIcon from './../../components/Icons/fa-icon';
import Category from './category';
import Course from './course';

class Content extends Component {

	constructor(props) {
		super(props);

		this.state = { stars: 0, contributors: [] };

		fetch('https://api.github.com/repos/leocardoso94/free-courses')
			.then(blob => blob.json()
				.then(data => this.updateStars(data.stargazers_count)));

		fetch('https://api.github.com/repos/Leocardoso94/Free-Courses/contributors')
			.then(blob => blob.json()
				.then(data => this.updateContributors(data)));

	}

	updateContributors(contributors) {
		this.setState({ contributors });
	}

	updateStars(stars) {
		this.setState({ stars });
	}


	closeSideBar() {
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
					You can contribute to the project adding more courses, <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leocardoso94/Free-Courses/blob/master/README.md">see how</a>
					<br />
					<br />
					FreeCourses is free and <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leocardoso94/Free-Courses">open source </a>. <a className="stars" target="_blank" rel="noopener noreferrer" href="https://github.com/Leocardoso94/Free-Courses"><FaIcon icon="fa-github" color="#000" /><FaIcon icon="fa-star" color="#ff8f00" /> {this.state.stars} Stars</a>
					<br />
					<br />
					<span >Made with <FaIcon icon="fa-heart" color="red" /> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leocardoso94">@LeoCardoso94</a></span>
				</p>
				<h3 style={{ textAlign: 'left', marginTop: '40px' }}>Useful links:</h3>
				<ol style={{ textAlign: 'left' }}>
					<li><a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org">freeCodeCamp</a></li>
					<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/EbookFoundation/free-programming-books">Free programming books</a></li>
				</ol>

				<h4>Contributors:</h4>
				{this.state.contributors.map(contributor => {
					return <a target="_blank" rel="noopener noreferrer" href={contributor.html_url} style={{ marginRight: "5px" }} key={contributor.login}>@{contributor.login}</a>;
				})}
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
