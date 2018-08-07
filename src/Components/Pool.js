import React, {Component} from 'react'
import {Image, Button, List} from 'semantic-ui-react'
import Moment from 'react-moment';
import moment from 'moment'



class Pool extends Component {

    constructor() {
        super()
    }

    render() {
        var button = null;
        if (!this.props.myPools) {
            button = <Button primary floated='right' onClick={() => {
                this.props.joinPool(this.props.pool.uuid)
            }}>Join </Button>
        } else {
            //TODO
        }

        return (
            <List.Item>
                <List.Content floated="left"> {this.props.pool.route}</List.Content>
                <List.Content floated="left">{ moment(this.props.pool.startTime, 'YYYY-MM-DD HH:mmaz').format("HH:mm A")}</List.Content>
                <List.Content floated="right">{button}</List.Content>
            </List.Item>
        )
    }
}


export default Pool
