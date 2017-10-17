import React, { Component } from 'react';
import './index.scss';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Contributor from './contributor';
class Contribute extends Component {
	constructor(props) {
		super(props);
		this.state = { contributors: [] };

		fetch('https://api.github.com/repos/Leocardoso94/Free-Courses/contributors')
			.then(blob => blob.json()
				.then(data => this.updateContributors(data)));

		this.contributorsList = this.contributorsList.bind(this);
	}

	updateContributors(contributors) {
		this.setState({ contributors });
	}

	contributorsList() {
		return this.state.contributors.map(contributor => {
			return <Contributor contributor={contributor} key={contributor.login}/>;
		});
	}

	render() {
		return (
			<ReactCSSTransitionGroup
				transitionName="initial"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}
				component="div"
				className="contribute">
				<h1 className="title">Contribute</h1>
				<p>If you know a free course that is not listed, please contribute. See how:
				</p>

				<ol>
					<li><a href="https://github.com/Leocardoso94/Free-Courses#fork-destination-box" rel="noopener noreferrer" target="_blank">Fork this project</a></li>
					<li>Go to the folder /src/data</li>
					<li>To add a new category</li>
					<ol>
						<li>Open the categories.json</li>
						<li>Add a new object, <a href="https://github.com/Leocardoso94/Free-Courses/blob/master/src/data/categories.json" rel="noopener noreferrer" target="_blank">example</a></li>
					</ol>
					<li>To add a new course</li>
					<ol>
						<li>Open the courses.json</li>
						<li>Add a new object, <a href="https://github.com/Leocardoso94/Free-Courses/blob/master/src/data/courses.json" rel="noopener noreferrer" target="_blank">example</a></li>
					</ol>
					<li>After that do a Pull Request by telling what was added</li>
				</ol>

				<h4>Contributors</h4>

				<ul className="contributors">
					{this.contributorsList()}
				</ul>

			</ReactCSSTransitionGroup>
		);
	}
}


export default Contribute;
