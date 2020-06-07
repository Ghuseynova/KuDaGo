import React from "react"
import "./Header.scss"
import NavBar from "../Navbar/Navbar"

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="header__inner">
					<a href="/event" className="header__logo">
						KUDOGO
					</a>
					<NavBar />
				</div>
			</header>
		</>
	)
}

export default Header
