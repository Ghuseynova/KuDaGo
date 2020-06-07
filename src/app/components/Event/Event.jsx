import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import classNames from "classnames"

import "./Event.scss"
import H1 from "../Heading/H1/H1"
import Icon from "../Icon/Icon"

function fixDate(str) {
	const date = new Date(str.replace(/['"]+/g, ""))
	const months = [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря",
	]

	const newDate = `${date.getDate()} ${
		months[date.getMonth()]
	} ${date.getFullYear()}`

	const time = `${date.getHours()}:${date.getMinutes()}`

	return `${newDate} ${time}`
}

const Event = ({ event, addToFavourite, removeFromFavourite, favs }) => {
	return (
		<>
			<div className="event">
				<div className="event__top">
					<div className="event__posted-date">
						{"Опубликовано "}
						{fixDate(event["post-date"])}
					</div>
					<div className="event__age-restriction">{event.age}</div>
					<div
						className={classNames("event__fav", {
							marked: favs.includes(event.id) ? true : "",
						})}
						onClick={() =>
							!favs.includes(event.id)
								? addToFavourite(event.id)
								: removeFromFavourite(event.id)
						}
						onKeyDown={() =>
							!favs.includes(event.id)
								? addToFavourite(event.id)
								: removeFromFavourite(event.id)
						}
						role="button"
						tabIndex="0"
					>
						<Icon
							className="event__fav-icon icon--fav"
							iconId="icon-heart"
						/>
					</div>
				</div>
				<div className="event__preview">
					<img
						src={`../../../img/${event.image}`}
						alt="event preview"
						className="event__preview-file"
					/>
				</div>
				<div className="event__content">
					<H1 className="event__title" title={event.title} />
					<div className="event__description">
						<p>{event.description}</p>
					</div>
					<div className="event__body">{parse(event.body)}</div>
				</div>
			</div>
		</>
	)
}

Event.defaultProps = {
	addToFavourite: null,
	removeFromFavourite: null,
}

Event.propTypes = {
	event: PropTypes.oneOfType([PropTypes.object]).isRequired,
	addToFavourite: PropTypes.func,
	removeFromFavourite: PropTypes.func,
	favs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Event
