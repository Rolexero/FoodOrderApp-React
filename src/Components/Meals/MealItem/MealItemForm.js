import React, {useRef, useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'


const MealItemForm = ({id, onAddToCart}) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef();
  const submitHandler = (e)=>{
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 5) {
      setAmountIsValid(false)
      return;
    }
    onAddToCart(enteredAmountNumber);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input input={{
            id: id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} label='Amount' ref={inputRef} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm