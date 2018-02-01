import { expect } from 'chai';
import courses from './courses.json';


/* eslint no-unused-expressions: "off" */
describe('ReducerCourses', () => {
  it('should return true if courses return an array', () => {
    expect(courses).to.be.an('array');
  });

  describe('properties of elements', () => {
    it('should return true if all object has a title', () => {
      expect(courses.every(course => course.title)).to.be.true;
    });
    it('should return true if all courses has a author', () => {
      expect(courses.every(course => course.author)).to.be.true;
    });
    it('should return true if all courses has a language', () => {
      expect(courses.every(course => course.language)).to.be.true;
    });
    it('should return true if all courses has a link', () => {
      expect(courses.every(course => course.link)).to.be.true;
    });
    it('should return true if all courses has a level', () => {
      expect(courses.every(course => course.level)).to.be.true;
    });
    it('should return true if all courses has a description', () => {
      expect(courses.every(course => course.description)).to.be.true;
    });
    it('should return true if all courses has a category', () => {
      expect(courses.every(course => course.categories.length > 0)).to.be.true;
    });
  });
});
