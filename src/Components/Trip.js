import React, {Component} from 'react'
import {Image, Button, List} from 'semantic-ui-react'
import Moment from 'react-moment';
import moment from "moment/moment";
class Trip extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <List.Item>
                <List.Content floated="left"> {this.props.trip.pool.route}</List.Content>
                <List.Content floated="left">{ moment(this.props.trip.pool.startTime, 'YYYY-MM-DD HH:mmaz').format("HH:mm A")}</List.Content>
                <List.Content floated="left">{this.props.trip.pool.status}</List.Content>
                <List.Content floated="right"> {this.props.trip.paymentStatus}</List.Content>
            </List.Item>
        )
    }
}


export default Trip
