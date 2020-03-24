import React, { createContext, useContext } from "react";

import categories from "../data/categories";

const initialState = {
  categories: categories,
  allCategories: categories,
  filterCategory: (_: string) => {}
};

const Context = createContext(initialState);

export class CategoriesProvider extends React.Component {
  state = initialState;

  componentDidMount = async () => {
    this.setState({
      categories: categories.sort((a, b) => (a.title < b.title ? -1 : 1)),
      allCategories: categories.sort((a, b) => (a.title < b.title ? -1 : 1))
    });
  };

  filterCategory = (title: string) => {
    this.setState({
      categories: this.state.allCategories.filter(category =>
        category.title.toLowerCase().match(title.toLowerCase())
      )
    });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, filterCategory: this.filterCategory }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const useCategories = () => {
  return useContext(Context);
};

export const CategoriesConsumer = Context.Consumer;
