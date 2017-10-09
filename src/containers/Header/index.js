import React, { Component } from 'react';
import './index.scss';

import FaIcon from './../../components/Icons/fa-icon';

class Header extends Component {
	handleClick() {
		const MenuButton = document.getElementById('menu-button');
		const SideBar = document.querySelector('.sidebar');
		MenuButton.classList.toggle('active');
		SideBar.classList.toggle('open');
		console.log(SideBar);
	}
	render() {
		return (
			<div id="header" className="header" >
				<a className="menu-button" id="menu-button" onClick={() => this.handleClick()}>
					<i className="bar" />
					<i className="bar" />
					<i className="bar" />
				</a >
				<a className="logo" href="/"><FaIcon icon="fa-book" /><b>Free Courses</b><FaIcon icon="fa-code" /></a>
			</div>
		);
	}
}

export default Header;
