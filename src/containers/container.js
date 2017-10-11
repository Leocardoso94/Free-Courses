import React, { Component } from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';

import './index.scss';

// Containers
import Header from './Header';
import SideBar from './SideBar';
import Category from './Category';
import Course from './Course';
import Home from './Home';

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


	closeSideBar() {
		document.querySelector('.sidebar').classList.remove('open');
		document.querySelector('#menu-button').classList.remove('active');
	}



	render() {
		return (
			<HashRouter>
				<div className="container">
					<Header />
					<Route path='/' render={() => (
						<div className="main" >
							<SideBar closeSideBar={this.closeSideBar} />
							<div className="content" onClick={() => this.closeSideBar()}>
								<Route exact path='/' component={Home} />
								<Route path='/category/:category' component={Category} />
								<Route path='/course/:id' component={Course} />
							</div>
						</div>
					)} />
				</div >
			</HashRouter>
		);
	}
}

export default Container;
