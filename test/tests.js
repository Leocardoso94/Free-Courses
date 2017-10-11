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
	console.log(categories);
	describe('categories is an object', function () {
		it('should return true if categories is an object', function () {
			assert.equal('object', (typeof categories));
		});
	});
});
