import React, {useState} from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/useInput";

const Checkout = ({ onHideCart, submitOrderHandler, isLoading }) => {  
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: enteredStreetInputHasError,
    valueChangeHandler: enteredStreetHandler,
    inputBlurHandler: enteredStreetBlurHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: enteredPostalCodeInputHasError,
    valueChangeHandler: enteredPostalCodeHandler,
    inputBlurHandler: enteredPostalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput((value) => value.trim() !== "" && value.trim().length === 6);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: enteredCityInputHasError,
    valueChangeHandler: enteredCityHandler,
    inputBlurHandler: enteredCityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalCodeIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const nameValueClassName = nameInputHasError ? "form-control invalid" : "";

  const streetClassName = enteredStreetInputHasError
    ? "form-control invalid"
    : "";

  const postalCodeClassName = enteredPostalCodeInputHasError
    ? "form-control invalid"
    : "";

  const cityClassName = enteredCityInputHasError ? "form-control invalid" : "";

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    submitOrderHandler({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    })
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <div className={nameValueClassName}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Please enter your name</p>
          )}
        </div>
      </div>
      <div className={classes.control}>
        <div className={streetClassName}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={enteredStreet}
            onChange={enteredStreetHandler}
            onBlur={enteredStreetBlurHandler}
          />
          {enteredStreetInputHasError && (
            <p className="error-text">Please enter your street</p>
          )}
        </div>
      </div>
      <div className={classes.control}>
        <div className={postalCodeClassName}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            value={enteredPostalCode}
            onChange={enteredPostalCodeHandler}
            onBlur={enteredPostalCodeBlurHandler}
          />
          {enteredPostalCodeInputHasError && (
            <p className="error-text">
              Please enter your postal code (6 characters long)
            </p>
          )}
        </div>
      </div>
      <div className={classes.control}>
        <div className={cityClassName}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={enteredCity}
            onChange={enteredCityHandler}
            onBlur={enteredCityBlurHandler}
          />
          {enteredCityInputHasError && (
            <p className="error-text">Please enter your postal city</p>
          )}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onHideCart}>
          Cancel
        </button>
        {isLoading ? (
          <button className={classes.submit}>Sending...</button>
        ) : (
          <button className={classes.submit} disabled={!formIsValid}>Confirm</button>
        )}
      </div>
    </form>
  );
};

export default Checkout;
