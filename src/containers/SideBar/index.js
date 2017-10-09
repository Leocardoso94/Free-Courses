import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import List from './../../components/List/list';

class SideBar extends Component {
	render() {
		return (
			<div className="sidebar">
				<div className="sidebar-inner">
					<input className="search" placeholder="" onChange={(event) => this.props.filterCategory(event.target.value)} />
					<List list={this.props.list} selectCategory={this.props.selectCategory} />
				</div>
			</div>
		);
	}
}

SideBar.propTypes = {
	list: PropTypes.array.isRequired,
	filterCategory: PropTypes.func.isRequired,
	selectCategory: PropTypes.func.isRequired
};

export default SideBar;
