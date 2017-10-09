import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItemCategory extends Component {
	constructor(props) {
		super(props);
		this.state = { course: props.item };
	}

	render() {
		return (
			<li className="course" onClick={() => this.props.selectCourse(this.state.course)}>
				<div className="categories">
					<span>tags:</span>
					{this.state.course.categories.map(category => <span className="tags" key={category}><i>{category}</i></span>)}
				</div>
				<div className="description" >
					<div className="title-holder">
						<h4 className="title">{this.state.course.title}</h4>
					</div>
					<div className="text-description">{this.state.course.description}</div>
				</div>
			</li>
		);
	}
}


ListItemCategory.propTypes = {
	item: PropTypes.object.isRequired,
	selectCourse: PropTypes.func.isRequired
};

export default ListItemCategory;
