import React from "react"
import PropTypes from "prop-types"
import EventContainer from "../../containers/EventContainer"
import "./EventDetail.scss"

const EventDetail = ({ match }) => {
	return (
		<div className="event-detail">
			<div className="event-detail__content container">
				<EventContainer match={match} />
			</div>
		</div>
	)
}

EventDetail.propTypes = {
	match: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default EventDetail
