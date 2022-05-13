import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  console.log('Meal')
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default React.memo(Meals);