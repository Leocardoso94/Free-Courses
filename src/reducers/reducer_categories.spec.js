import { expect } from 'chai';
import ReducerCategories from './reducer_categories';

describe('ReducerCategories', function () {
	it('should return true if ReducerCategories return an array', () => {
		expect(ReducerCategories()).to.be.an('array');
	});

	describe('properties of elements', () => {
		it('should return true if all object has a title', () => {
			expect(ReducerCategories().every(cat => cat.title)).to.be.true;
		});
		it('should return true if all object has a icon', () => {
			expect(ReducerCategories().every(cat => cat.icon)).to.be.true;
		});
	});
});
