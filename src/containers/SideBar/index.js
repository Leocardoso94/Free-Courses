import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import DevIcon from './../../components/Icons/dev-icon';
import FaIcon from './../../components/Icons/fa-icon';
import { fetchCategories, filterCategory } from '../../actions/index';

class SideBar extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-inner">
          <input
            className="search"
            placeholder=""
            onChange={event => this.props.filterCategory(event.target.value)}
          />
          <ul>
            <li>
              <Link
                className="item"
                to="/category/all"
                onClick={() => this.props.closeSideBar()}
                onKeyPress={() => this.props.closeSideBar()}
              ><FaIcon icon="fa-code" />All Courses
              </Link>
            </li>
            {this.props.categories.map(category => (
              <li key={category.title} >
                <Link
                  className="item"
                  to={`/category/${category.title.toLowerCase()}`}
                  onClick={() => this.props.closeSideBar()}
                  onKeyPress={() => this.props.closeSideBar()}
                >
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

export default
connect(({ categories }) => ({ categories }), { fetchCategories, filterCategory })(SideBar);

SideBar.propTypes = {
  closeSideBar: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(Object).isRequired,
  fetchCategories: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired
};
