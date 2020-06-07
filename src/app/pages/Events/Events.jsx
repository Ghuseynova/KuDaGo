import React from "react"
// import PropTypes from "prop-types"
import H1 from "../../components/Heading/H1/H1"
import FilterContainer from "../../containers/FilterContainer"
import Sort from "../../containers/Sort"
import CardsContainer from "../../containers/CardsContainer"
import Button from "../../components/Button/Button"
import FormСontainer from "../../containers/FormContainer"
import "./Events.scss"
import categories from "../../data/category.json"

const Events = () => {
	return (
		<>
			<div className="events">
				<div className="container events__container">
					<div className="events__top">
						<H1 className="events__title" title="Events" />
						<div className="events__top-bottom">
							<Sort
								className="events__dropdown"
								dropdownOptions={[
									{
										text: "По возрастанию",
										direction: "asc",
									},
									{
										text: "По убыванию",
										direction: "desc",
									},
								]}
							/>
							<FormСontainer />
							<FilterContainer
								className="events__filter"
								filterList={categories}
							/>
						</div>
					</div>
					<div className="events__content">
						<CardsContainer />
						<Button className="btn--load events__btn">
							Загрузить ещё
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Events
