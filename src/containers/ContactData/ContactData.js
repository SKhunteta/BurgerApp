import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import Input from '../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }
        axios.post( '/orders.json', order )
             .then( response => {
                 this.setState({ loading: false });
            } )
            .catch( error => {
                 this.setState({ loading: false });
            } );
    }


    render() {
        // let form = ();
        // if (this.state.loading) {
        //     <Spinner />
        // }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <Input elementType="..." elementConfig="..." value="..."></Input>
                    <Input inputtype="input" type="email" name="email" placeholder="Your Email"></Input>
                    <Input inputtype="input" type="text" name="street" placeholder="Your Street"></Input>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;