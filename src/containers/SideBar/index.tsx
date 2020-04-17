import React, { FC } from "react";
import { Link } from "react-router-dom";
import DevIcon from "../../components/Icons/dev-icon";
import FaIcon from "../../components/Icons/fa-icon";
import { useCategories } from "../../contexts/Categories";
import { Category } from "../../data/categories";
import "./index.scss";

const RenderCategoryItem: FC<{
  category: Category;
  closeSideBar: () => void;
}> = ({ category, closeSideBar }) => (
  <li>
    <Link
      className="item"
      to={`/category/${category.title.toLowerCase()}`}
      onClick={() => closeSideBar()}
      onKeyPress={() => closeSideBar()}
    >
      <DevIcon icon={category.icon} />
      {category.title}
    </Link>
  </li>
);

const SideBar: FC<{ closeSideBar: () => void }> = ({ closeSideBar }) => {
  const { categories, filterCategory } = useCategories();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <input
          className="search"
          placeholder=""
          onChange={(event) => filterCategory(event.target.value)}
        />
        <ul>
          <li>
            <Link
              className="item"
              to="/category/all"
              onClick={() => closeSideBar()}
              onKeyPress={() => closeSideBar()}
            >
              <FaIcon icon="fa-code" />
              All Courses
            </Link>
          </li>
          {categories.map((category) => (
            <RenderCategoryItem
              category={category}
              closeSideBar={closeSideBar}
              key={category.title}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
