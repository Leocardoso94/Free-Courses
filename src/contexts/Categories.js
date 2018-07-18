import React, { createContext } from 'react';
import { API_URL } from '../utils';

const Categories = createContext();
/* eslint react/prop-types: 0 */
/* eslint react/no-unused-state: 0 */

export class CategoriesProvider extends React.Component {
  state = {
    categories: [],
    allCategories: [],
    filterCategory: (value) => {
      this.setState({
        categories: this.state.allCategories.filter(category =>
          category.title.toLowerCase().match(value.toLowerCase()))
      });
    }
  };

  componentDidMount = async () => {
    const categories = await (await fetch(`${API_URL}/categories.json`)).json();
    this.setState({
      categories: categories.sort((a, b) => (a.title < b.title ? -1 : 1)),
      allCategories: categories.sort((a, b) => (a.title < b.title ? -1 : 1))
    });
  };

  render() {
    return <Categories.Provider value={this.state}>{this.props.children}</Categories.Provider>;
  }
}

export const CategoriesConsumer = Categories.Consumer;

export const withCategories = Component => props => (
  <CategoriesConsumer>
    {({ categories, filterCategory, allCategories }) => (
      <Component
        {...props}
        categories={categories}
        filterCategory={filterCategory}
        allCategories={allCategories}
      />
    )}
  </CategoriesConsumer>
);
