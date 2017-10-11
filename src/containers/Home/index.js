import React, { Component } from 'react';
import './index.scss';
import FaIcon from './../../components/Icons/fa-icon';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class Home extends Component {
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
	render() {
		return (

			<div className="home">
				<ReactCSSTransitionGroup
					transitionName="initial"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}>
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
				</ReactCSSTransitionGroup>
			</div>

		);
	}
}

export default Home;
