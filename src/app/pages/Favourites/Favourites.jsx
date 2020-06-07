import React from "react"
import H1 from "../../components/Heading/H1/H1"
import FavouritesContainer from "../../containers/FavouritesContainer"
import Button from "../../components/Button/Button"
import "./Favourites.scss"

const Favourites = () => {
	return (
		<>
			<div className="favourites">
				<div className="container favourites__container">
					<div className="favourites__top">
						<H1 className="favourites__title" title="Favourites" />
					</div>
					<div className="favourites__content">
						<FavouritesContainer />
						<Button className="btn--load favourites__btn">
							Загрузить ещё
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Favourites
