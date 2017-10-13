import React, { Component } from 'react';
import './index.scss';
import DevIcon from './../../components/Icons/dev-icon';
import FaIcon from './../../components/Icons/fa-icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import categories from './../../data/categories.json';

class SideBar extends Component {

	constructor(props) {
		super(props);

		categories.sort((a, b) => a.title < b.title ? -1 : 1);

		this.state = { categories };

		this.filterCategory = this.filterCategory.bind(this);
	}

	filterCategory(value) {
		const filteredCategories = categories.filter(category => category.title.toLowerCase().match(value.toLowerCase()));

		this.setState({ categories: filteredCategories });
	}

	render() {
		return (
			<div className="sidebar">
				<div className="sidebar-inner">
					<input className="search" placeholder="" onChange={(event) => this.filterCategory(event.target.value)} />
					<ul>
						<li onClick={() => this.props.closeSideBar()}>
							<Link className="item" to={`/category/all`}><FaIcon icon="fa-code" />All Courses</Link>
						</li>
						{this.state.categories.map(category => {
							return (
								<li key={category.title} onClick={() => this.props.closeSideBar()}>
									<Link className="item" to={`/category/${category.title}`}>
										{category.icon ? <DevIcon icon={category.icon} color={category.iconColor} /> : ''}
										{category.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}


SideBar.propTypes = {
	closeSideBar: PropTypes.func.isRequired
};


export default SideBar;
