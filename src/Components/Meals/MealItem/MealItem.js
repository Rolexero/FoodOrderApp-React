import React, {useContext} from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CardContext from '../../Store/Card-context'

const MealItem = ({meal}) => {
      const ctx = useContext(CardContext);

  const price = `$${meal.price.toFixed(2)}`

  const addAmountToCart = (amount)=>{
    ctx.addItem({
      id: meal.id,
      amount: amount,
      price: meal.price,
      name: meal.name
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemForm id={meal.id} onAddToCart={addAmountToCart} />
      </div>
    </li>
  );
}

export default MealItem