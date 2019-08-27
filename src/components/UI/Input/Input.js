import React from 'react';
import classes from './input.css'

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} 
            {...props.elementConfig} value={props.value}/>;
        case ('textarea'): 
            inputElement = <textarea className={classes.InputElement} 
            {...props.elementConfig} value={props.value}/>;
        default: 
            inputElement = <input className={classes.InputElement} 
            {...props.elementConfig} value={props.value} />;
    }   


    return (
        <div className={classes.Input}>
        <label>
            {props.label}
            {inputElement}
        </label>
    </div>
    )
    };

export default input;