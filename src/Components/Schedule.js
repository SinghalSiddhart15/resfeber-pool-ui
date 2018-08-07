import React, {Component} from 'react'
import {Form, Button, Message, Icon} from 'semantic-ui-react'
import Datetime from 'react-datetime'
import moment from 'moment';

class Schedule extends Component {

    constructor() {
        super()
        this.doSubmit = this.doSubmit.bind(this)
    }

    componentDidMount() {
        this.props.startLoadingCar()
    }

    doSubmit(event) {
        console.log(this.props.car.uuid)
        this.props.schedulePool(event)
        this.props.onHistory.push('/pools')
    }

    render() {
        var date = new Date()
        if (this.props.myPools) {
            return (
                <div>
                    <Message visible><Icon name='warning' color="red" /> You have a pool already scheduled</Message>
                </div>
            )

        } else {
            return (
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input name="route" fluid label='Route' placeholder='Route'/>
                    </Form.Group>
                    <Datetime dateFormat="YYYY-MM-DD" timeFormat={true}/>
                    <Button type='submit' onClick={this.doSubmit}>Submit</Button>
                </Form>
            )
        }

    }
}

export default Schedule