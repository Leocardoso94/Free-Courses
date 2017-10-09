import React from 'react';
import PropTypes from 'prop-types';

import ListItemCategory from './list-item-category';
import ListItemCourse from './list-item-course';

const List = ({ list, selectCategory, selectCourse }) => {
	const listItems = list.map((item, index) => {
		return selectCategory ? <ListItemCategory key={item.title} item={item} selectCategory={selectCategory} /> : <ListItemCourse key={item.title + index} item={item} selectCourse={selectCourse} />;
	});

	return <ul>{listItems}</ul>;
};

List.propTypes = {
	list: PropTypes.array,
	selectCategory: PropTypes.func,
	selectCourse: PropTypes.func
};

export default List;

