import { expect } from 'chai';
import ReducerCourses from './reducer_courses';

describe('ReducerCourses', () => {
  it('should return true if ReducerCourses return an array', () => {
    expect(ReducerCourses()).to.be.an('array');
  });

  describe('properties of elements', () => {
    it('should return true if all object has a title', () => {
      expect(ReducerCourses().every(course => course.title)).to.be.true;
    });
    it('should return true if all courses has a author', () => {
      expect(ReducerCourses().every(course => course.author)).to.be.true;
    });
    it('should return true if all courses has a language', () => {
      expect(ReducerCourses().every(course => course.language)).to.be.true;
    });
    it('should return true if all courses has a link', () => {
      expect(ReducerCourses().every(course => course.link)).to.be.true;
    });
    it('should return true if all courses has a level', () => {
      expect(ReducerCourses().every(course => course.level)).to.be.true;
    });
    it('should return true if all courses has a description', () => {
      expect(ReducerCourses().every(course => course.description)).to.be.true;
    });
    it('should return true if all courses has a category', () => {
      expect(ReducerCourses().every(course => course.categories.length > 0)).to.be.true;
    });
  });
});
