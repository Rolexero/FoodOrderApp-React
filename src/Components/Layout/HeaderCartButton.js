import React, {useContext, useState, useEffect} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CardContext from '../Store/Card-context'


const HeaderCartButton = ({onShowCart}) => {
    const ctx = useContext(CardContext);
    const [btnIsHightlighted, setBtnIsHighlighted] = useState(false)
    const { items } = ctx;

    const numberOfCart = items.reduce((currItem, item)=>{
        return currItem + item.amount
    }, 0)


    const classBtn = `${classes.button} ${btnIsHightlighted && classes.bump}`

    useEffect(()=>{
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        }, 300)

        return ()=>{
            clearTimeout(timer);
        }
    }, [items])


  return (
      <button className={classBtn} onClick={onShowCart}>
          <span className={classes['icon']}>
              <CartIcon />
          </span>
          <span className={classes['cart']}>Your Cart</span>
          <span className={classes['badge']}>
              {numberOfCart}
          </span>
      </button>
  )
}

export default HeaderCartButton