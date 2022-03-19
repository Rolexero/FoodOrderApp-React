import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'


const Backdrop = ({onHideCart})=>{
    return (
        <div className={classes.backdrop} onClick={onHideCart}></div>
    )
}

const Overlay = ({children})=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

const  portalElement = document.getElementById('overlays')

const Modal = ({children, onHideCart}) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart}/>, portalElement)}
        {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
    </React.Fragment>
  )
}

export default Modal