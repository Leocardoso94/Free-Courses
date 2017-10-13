import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Contribute extends Component {
	render() {
		return (
			<div className="contribute">
				<h1 className="title">Contribute</h1>
				<p>If you know a free course that is not listed, please contribute. See how:</p>
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
			</div>
		);
	}
}

Contribute.propTypes = {

};

export default Contribute;
