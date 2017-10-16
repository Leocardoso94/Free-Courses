import categories from './../data/categories.json';
categories.sort((a, b) => a.title < b.title ? -1 : 1);

export default function () {
	return categories;
}
