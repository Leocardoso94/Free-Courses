const assert = require('assert');

// describe('Array', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			assert.equal(-1, [1, 2, 3].indexOf(4));
// 		});
// 	});
// });

describe('categories.json', function () {
	const categories = require('../src/data/categories.json');
	describe('type of categories', function () {
		it('should return object', function () {
			assert.equal('object', (typeof categories));
		});
	});
	describe('title of categories', function () {
		it('should return false if all categories has a title', function () {
			let result = categories.some((category) => {
				return typeof category.title !== 'string';
			});
			assert.equal(false, result);
		});
	});
});
