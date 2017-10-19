import { expect } from 'chai';
import ReducerCourses from './reducer_courses';

describe('ReducerCourses', function () {
	it('should return true if ReducerCourses return an array', () => {
		expect(ReducerCourses()).to.be.an('array');
	});

	describe('properties of elements', () => {
		it('should return true if all object has a title', () => {
			expect(ReducerCourses().every(course => course.title)).to.be.true;
		});
		it('should return true if all courses has a author', function () {
			expect(ReducerCourses().every(course => course.author)).to.be.true;
		});
		it('should return true if all courses has a language', function () {
			expect(ReducerCourses().every(course => course.language)).to.be.true;
		});
		it('should return true if all courses has a link', function () {
			expect(ReducerCourses().every(course => course.link)).to.be.true;
		});
		it('should return true if all courses has a level', function () {
			expect(ReducerCourses().every(course => course.level)).to.be.true;
		});
		it('should return true if all courses has a description', function () {
			expect(ReducerCourses().every(course => course.description)).to.be.true;
		});
		it('should return true if all courses has a category', function () {
			expect(ReducerCourses().every(course => course.categories.length > 0)).to.be.true;
		});
	});
});
