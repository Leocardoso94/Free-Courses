import { expect } from 'chai';
import categories from './categories.json';

/* eslint no-unused-expressions: "off" */
describe('categories', () => {
  it('should return true if categories return an array', () => {
    expect(categories).to.be.an('array');
  });

  describe('properties of elements', () => {
    it('should return true if all object has a title', () => {
      expect(categories.every(category => category.title)).to.be.true;
    });
    it('should return true if all object has a icon', () => {
      expect(categories.every(category => category.icon)).to.be.true;
    });
  });
});
