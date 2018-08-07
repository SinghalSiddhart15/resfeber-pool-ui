import React, {Component} from 'react'
import logo from '../logo.svg';


class Header extends Component {
    render() {
        return (
            <img src={logo} className="logo" alt="logo"/>
    )
    }
}

export default Header