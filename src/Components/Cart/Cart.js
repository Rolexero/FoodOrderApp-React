import React, {useContext, useState} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CardContext from '../Store/Card-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/firebase-config';
import { Fragment } from 'react/cjs/react.production.min';


const Cart = ({onHideCart}) => {
    const [didSubmit, setDidSubmit] = useState(false);

      const postsCollectionRef = collection(db, "orderDetails");
        const [isLoading, setIsLoading] = useState(false);


  const [isCheckOut, setIsCheckOut] = useState(false);
  const ctx = useContext(CardContext)
  const cartItems = ctx.items;
  const totalAmount = `₦${ctx.totalAmount}`;

  const hasItem = cartItems.length > 0
    console.log("Cart");

  const cartItemAddHandler = (item)=>{
    ctx.addItem({...item, amount: 1})
  }

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  };

  const orderHandler = ()=>{
    setIsCheckOut(true)
  }

  const submitOrderHandler = async (userData)=>{
    setIsLoading(true);
      await addDoc(postsCollectionRef, {userData, orderedItems: ctx.items});
      setIsLoading(false)
      setDidSubmit(true)
      ctx.clearCartHandler();
  }

  const modalActions = <div className={classes.actions}>
          <button
            type="button"
            className={classes["button--alt"]}
            onClick={onHideCart}
          >
            Close
          </button>
          {hasItem && (
            <button
              type="button"
              className={classes.button}
              onClick={orderHandler}
            >
              Order
            </button>
          )}
        </div>

        const cartModal = (
          <Fragment>
            <ul className={classes["cart-items"]}>
              {cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  onAdd={cartItemAddHandler.bind(null, cartItem)}
                  onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
                />
              ))}
            </ul>
            <div className={classes.total}>
              <span>Total amount</span>
              <span>{totalAmount}</span>
            </div>
            {isCheckOut && (
              <Checkout
                onHideCart={onHideCart}
                isLoading={isLoading}
                submitOrderHandler={submitOrderHandler}
              />
            )}
            {!isCheckOut && modalActions}
          </Fragment>
        );

        const didSubmitModal = <div className={classes.actions}>
          <p>Successfully sent your order</p>
          <button onClick={onHideCart} className={classes.button}>Close</button>
        </div>

  return (
    <Modal onHideCart={onHideCart}>
      {!didSubmit && cartModal}
      {didSubmit && didSubmitModal}
    </Modal>
  );
}

export default Cart;