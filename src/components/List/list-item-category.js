import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevIcon from './../Icons/dev-icon';


class ListItemCategory extends Component {
	constructor(props) {
		super(props);

		this.state = { category: props.item };
	}

	render() {
		return (
			<li onClick={() => this.props.selectCategory(this.state.category)} >
				<span className="item">
					{this.state.category.icon ? <DevIcon icon={this.state.category.icon} color={this.state.category.iconColor} /> : ''}
					{this.state.category.title}
				</span>
			</li>
		);
	}
}


ListItemCategory.propTypes = {
	item: PropTypes.object.isRequired,
	selectCategory: PropTypes.func.isRequired
};

export default ListItemCategory;
