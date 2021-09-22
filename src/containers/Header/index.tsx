import React from "react";
import { Link } from "react-router-dom";
import FaIcon from "./../../components/Icons/fa-icon";
import "./index.scss";

const toggleMenu = () => {
  const MenuButton = document.getElementById("menu-button");
  const SideBar = document.querySelector(".sidebar");
  if (MenuButton) MenuButton.classList.toggle("active");
  if (SideBar) SideBar.classList.toggle("open");
};

const togleActive = () => {
  const subMenu = document.querySelector(".sub-menu");
  if (subMenu) subMenu.classList.toggle("active");
};

const Header = () => (
  <div id="header" className="header">
    <button
      className="menu-button"
      id="menu-button"
      onClick={() => toggleMenu()}
    >
      <i className="bar" />
      <i className="bar" />
      <i className="bar" />
    </button>
    <Link className="logo" to="/">
      <b>Free Courses</b>
    </Link>
    <Link className="contribute-link" to="/contribute">
      Add a Course
    </Link>
    <span
      role="button"
      tabIndex={0}
      className="ellipsi"
      onClick={togleActive}
      onKeyPress={togleActive}
    >
      <FaIcon icon="fa-ellipsis-v" />
    </span>

    <div
      role="button"
      tabIndex={0}
      className="sub-menu"
      onClick={togleActive}
      onKeyPress={togleActive}
    >
      <Link to="/contribute" className="link">
        Contribute
      </Link>
    </div>
  </div>
);

export default Header;
