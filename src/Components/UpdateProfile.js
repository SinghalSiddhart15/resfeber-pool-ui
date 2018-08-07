import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'

class UpdateProfile extends Component {

    constructor() {
        super()
        this.nextPath = this.nextPath.bind(this)

    }

    nextPath(event) {
        event.preventDefault()
        console.log(this.props.profile)
        this.props.updateProfileInfo(event,this.props.profile.uuid)
        this.props.onHistory.push('profile')
    }

    render() {
        const  phoneNumber = this.props.profile.phone?this.props.profile.phone : ""
        return (
            <Form fluid>
                <Form.Field>
                    <div className='ui one'>
                        <input  placeholder='Phone' name='phone'  />
                    </div>
                </Form.Field>
                <Button type='submit' onClick={this.nextPath} basic color='green'>Update</Button>
            </Form>
        )
    }
}

export default UpdateProfile