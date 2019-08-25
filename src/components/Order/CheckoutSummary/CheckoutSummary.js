import React from 'react';
import ReactDOM from 'react-dom'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
        <div>
           <h1 style={{width: '300px', height: '300px', margin: 'auto'}}> We hope it tastes good! </h1>
           <Burger ingredients = {props.ingredients}/>
        </div>
        <Button 
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
        <Button 
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
    );
}

export default checkoutSummary;