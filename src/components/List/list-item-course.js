import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItemCategory extends Component {
	constructor(props) {
		super(props);
		this.state = { course: props.item };
	}

	getImage() {
		const defaultImage = 'https://cdn.dribbble.com/users/4764/screenshots/2418753/books_1x.png';
		return !this.state.course.image ? defaultImage : this.state.course.image;
	}

	getDescription() {
		let description = this.state.course.description.replace(/^(.{50}[^\s]*).*/, "$1");

		this.state.course.description.length > 51 ? description += '...' : '';

		return description;
	}

	render() {
		return (
			<li className="course" onClick={() => this.props.selectCourse(this.state.course)}>
				<div className="image">
					<img src={this.getImage()} />
				</div>
				<div className="description" >
					<h6 className="author">{this.state.course.author}</h6>
					<h4 className="title">{this.state.course.title}</h4>
					<p className="text-description">{this.getDescription()}</p>
				</div>
				<div className="categories">
					{this.state.course.categories.map(category => <i key={category}>{category}</i>)}
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
