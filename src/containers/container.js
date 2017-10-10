import React, { Component } from 'react';
import './index.scss';

// Containers
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

import categories from './../data/categories.json';

class Container extends Component {
	constructor(props) {
		super(props);

		categories.sort((a, b) => a.title < b.title ? -1 : 1);

		this.state = {
			categories,
			selectedCategory: null,
			selectedCourse: null
		};

		this.filterCategory = this.filterCategory.bind(this);
		this.selectCategory = this.selectCategory.bind(this);
		this.selectCourse = this.selectCourse.bind(this);
	}

	filterCategory(value) {
		const filteredCategories = categories.filter(category => category.title.toLowerCase().match(value.toLowerCase()));

		this.setState({ categories: filteredCategories });
	}

	selectCourse(course) {
		this.setState({ selectedCourse: course });
	}

	selectCategory(category) {
		this.setState({ selectedCategory: category, selectedCourse: null });
		document.querySelector('.sidebar').classList.remove('open');
		document.querySelector('#menu-button').classList.remove('active');
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="main" >
					<SideBar list={this.state.categories} filterCategory={this.filterCategory} selectCategory={this.selectCategory} />
					<Content selectCourse={this.selectCourse} selectedCourse={this.state.selectedCourse} category={this.state.selectedCategory} />
				</div>
			</div >
		);
	}
}

export default Container;
