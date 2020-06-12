import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon from "../Icon/Icon"
import "./Card.scss"

const Card = ({
	dataEvent,
	className,
	addToFavourite,
	removeFromFavourite,
	favs,
}) => {
	return (
		<div className={classNames("card", className)}>
			<div className="card__top">
				<div className="card__preview">
					<Link
						to={`/event/${dataEvent.slug}`}
						className="card__link"
					>
						<img
							src={`./img/${dataEvent.image}`}
							alt=""
							className="card__preview-file"
						/>
					</Link>
				</div>
				{dataEvent.category.map((category) => (
					<div className="card__categ" key={category}>
						{category}
					</div>
				))}
			</div>
			<div className="card__content">
				<div className="card__header">
					<h2 className="card__title">
						<Link to={`/event/${dataEvent.slug}`}>
							{dataEvent.title}
						</Link>
						<span className="card__age-restriction">
							{dataEvent.age}
						</span>
					</h2>
				</div>
				<div className="card__description">{dataEvent.description}</div>
				<div className="card__details">
					<div className="time card__detail">
						<div className="card__dates">
							<div className="card__date" />
						</div>
					</div>
				</div>
				<div className="card__bottom">
					<div className="card__bottom-inner">
						<div
							className={classNames("card__fav", {
								marked: favs.includes(dataEvent.id) ? true : "",
							})}
							onClick={() =>
								!favs.includes(dataEvent.id)
									? addToFavourite(dataEvent.id)
									: removeFromFavourite(dataEvent.id)
							}
							onKeyDown={() =>
								!favs.includes(dataEvent.id)
									? addToFavourite(dataEvent.id)
									: removeFromFavourite(dataEvent.id)
							}
							role="button"
							tabIndex="0"
						>
							<Icon
								className="card__fav-icon icon--fav"
								iconId="icon-heart"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Card.defaultProps = {
	addToFavourite: null,
	removeFromFavourite: null,
}

Card.propTypes = {
	dataEvent: PropTypes.oneOfType([PropTypes.object]).isRequired,
	className: PropTypes.string.isRequired,
	addToFavourite: PropTypes.func,
	removeFromFavourite: PropTypes.func,
	favs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card
