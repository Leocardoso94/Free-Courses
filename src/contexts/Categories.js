import React, { createContext } from 'react';
import categoriesJson from './../data/categories.json';

const Categories = createContext();
/* eslint react/prop-types: 0 */
/* eslint react/no-unused-state: 0 */

export class CategoriesProvider extends React.Component {
  state = {
    categories: categoriesJson.sort((a, b) => (a.title < b.title ? -1 : 1)),
    filterCategory: (value) => {
      this.setState({
        categories: categoriesJson.filter(category => category.title.toLowerCase()
          .match(value.toLowerCase()))
      });
    }
  }

  render() {
    return (
      <Categories.Provider value={this.state} >
        {this.props.children}
      </Categories.Provider>
    );
  }
}

export const CategoriesConsumer = Categories.Consumer;

export const withCategories = Component => props => (
  <CategoriesConsumer>
    {({ categories, filterCategory }) => (
      <Component {...props} categories={categories} filterCategory={filterCategory} />
    )}
  </CategoriesConsumer>
);
