import React, {useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CardContext from '../Store/Card-context';
import CartItem from './CartItem';


const Cart = ({onHideCart}) => {
  const ctx = useContext(CardContext)
  const cartItems = ctx.items;
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const hasItem = cartItems.length > 0

  const cartItemAddHandler = (item)=>{
    ctx.addItem({...item, amount: 1})
  }

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  };

  return (
    <Modal onHideCart={onHideCart}>
      <ul className={classes['cart-items']}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} onAdd={cartItemAddHandler.bind(null, cartItem)} onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}/>
        ))}
      </ul>
      <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
          <button type="button" className={classes['button--alt']} onClick={onHideCart}>Close</button>
          { hasItem && <button type="button" className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart