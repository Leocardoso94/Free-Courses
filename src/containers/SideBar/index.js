import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import DevIcon from './../../components/Icons/dev-icon';
import FaIcon from './../../components/Icons/fa-icon';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = { categories: props.categories };

    this.filterCategory = this.filterCategory.bind(this);
  }

  filterCategory(value) {
    const filteredCategories = this.props.categories.filter(category => category.title.toLowerCase().match(value.toLowerCase()));

    this.setState({ categories: filteredCategories });
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-inner">
          <input className="search" placeholder="" onChange={event => this.filterCategory(event.target.value)} />
          <ul>
            <li onClick={() => this.props.closeSideBar()}>
              <Link className="item" to="/category/all"><FaIcon icon="fa-code" />All Courses</Link>
            </li>
            {this.state.categories.map(category => (
              <li key={category.title} onClick={() => this.props.closeSideBar()}>
                <Link className="item" to={`/category/${category.title}`}>
                  {category.icon ? <DevIcon icon={category.icon} color={category.iconColor} /> : ''}
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
}

export default connect(({ categories }) => ({ categories }))(SideBar);


SideBar.propTypes = {
  closeSideBar: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(Object)
};
