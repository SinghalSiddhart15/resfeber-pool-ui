import React, {Component} from 'react'
import {Form, Button, Card, Image} from 'semantic-ui-react'
import {loadTrips} from "../redux/actions";

class MyCar extends Component {
    constructor() {
        super()
        this.loadSchedulePage = this.loadSchedulePage.bind(this)
    }

    componentDidMount() {
        this.props.startLoadingCar()
    }

    loadSchedulePage(event) {
        event.preventDefault()
        console.log("here")
        this.props.onHistory.push('schedule')

    }

    render() {
        if (this.props.car) {
            return (

                <Card fluid>
                    <Image src=''/>
                    <Card.Content>
                        <Card.Header>{this.props.car.number}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.props.car.brand}</span>
                        </Card.Meta>
                        <Card.Description>{this.props.car.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button onClick={() => {
                                this.props.deRegisterCar(this.props.car.uuid)
                            }} basic color='red'> Delete </Button>
                            <Button onClick={this.loadSchedulePage} basic color='green'> Schedule </Button>
                        </div>
                    </Card.Content>
                </Card>
            )
        } else {
            return (
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input name="number" fluid label='Number' placeholder='Number' error/>
                        <Form.Input name="brand" fluid label='Brand' placeholder='Brand' error/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input name="description" fluid label='Description' placeholder='Description' error/>
                        <Form.Input name="capacity" fluid label='Capacity' placeholder='Capacity' error/>
                    </Form.Group>
                    <Button type='submit' onClick={this.props.registerCar}>Submit</Button>
                </Form>
            )
        }

    }
}

export default MyCar