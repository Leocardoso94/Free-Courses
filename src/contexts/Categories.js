import React, { Component, createContext } from 'react';
import categories from './../data/categories.json';

const Categories = createContext();
/* eslint react/prop-types: 0 */
/* eslint react/no-unused-state: 0 */

export class CategoriesProvider extends Component {
  state = {
    categories: categories.sort((a, b) => (a.title < b.title ? -1 : 1)),
    filterCategory: (value) => {
      this.setState({
        categories: categories.filter(category => category.title.toLowerCase()
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
