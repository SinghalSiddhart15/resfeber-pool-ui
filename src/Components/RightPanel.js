import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class RightPanel extends Component {

    constructor(props) {
        super(props);
        this.setRedirect = this.setRedirect.bind(this);

    }

    setRedirect = () => {
        this.setState({
            isLoggedIn : false
        })
        window.location = "http://localhost:8080/logout"

    }


    render() {
        return (
            <ul>
                <li><Link className="" to="/profile">Profile</Link></li>
                <li><Link className="" to="/pools">Pools</Link></li>
                <li><Link className="" to="/myCar">My Car</Link></li>
                <li><Link className="" to="/schedule">Schedule</Link></li>
                <li><Link className="" to="/trips">Trips</Link></li>
                <li><button onClick={this.setRedirect}>Logout</button></li>
            </ul>
        )
    }
}

export default RightPanel