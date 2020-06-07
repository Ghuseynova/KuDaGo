import React from "react"
import "./Navbar.scss"
import NavItem from "../NavItem/NavItem"

const NavBar = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<NavItem
					linkText="Cобытия"
					href="/event"
					className={{
						item: "menu__list-item",
						link: "menu__list-link",
					}}
				/>
				<NavItem
					linkText="Избранные"
					href="/favourites"
					className={{
						item: "menu__list-item",
						link: "menu__list-link",
					}}
				/>
			</ul>
		</nav>
	)
}

export default NavBar
