import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, Image,Icon} from 'semantic-ui-react'

class Profile extends Component {

    constructor(props) {
        super(props)
        this.loadUpdateProfilePage= this.loadUpdateProfilePage.bind(this)
    }


    loadUpdateProfilePage(event) {
        event.preventDefault()
        this.props.onHistory.push('updateProfile')

    }

    render(props) {
        return (
            <Card fluid>
                <Image src=''/>
                <Card.Content>
                    <Card.Header>{this.props.profile.firstName}</Card.Header>
                    <Card.Meta>
                        <Icon name='call' /> <span className='date'>{this.props.profile.phone}</span>
                    </Card.Meta>
                    <Card.Description> <Icon name='mail' /> {this.props.profile.email}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui one buttons'>
                        <Button onClick={this.loadUpdateProfilePage} basic color='green'> Update </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}



export default Profile