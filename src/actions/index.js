import { FETCH_CATEGORIES, FILTER_CATEGORIES } from './actions_types';
import categories from './../data/categories.json';

categories.sort((a, b) => (a.title < b.title ? -1 : 1));

export function fetchCategories() {
  return {
    payload: categories,
    type: FETCH_CATEGORIES
  };
}

export function filterCategory(value) {
  const filteredCategories =
    categories.filter(category => category.title.toLowerCase().match(value.toLowerCase()));

  return {
    payload: filteredCategories,
    type: FILTER_CATEGORIES
  };
}
