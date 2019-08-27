import React, {Component} from 'react';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Order from '../../components/Order/Order';
import Layout from '../../components/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);