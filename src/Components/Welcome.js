import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {PostData} from '../Service/PostData';
import {Redirect} from 'react-router-dom';
import Footer from "./Footer";
import Header from './Header'
import GoogleButton from 'react-google-button'


class Welcome extends Component {

    constructor(props) {
        super(props);
        this.setRedirect = this.setRedirect.bind(this);

    }

    setRedirect =()=>{
        window.location = "http://localhost:8080/login"
    }

    render() {
        return (
            <div className="pool-container">
                <div className="pool-header">
                    <Header/>
                </div>
                <div className="pool-section">
                    <div className="pools login">
                        <GoogleButton
                            onClick={this.setRedirect}
                        />
                    </div>
                </div>
                <div className="pool-footer">
                    <Footer/>
                </div>
            </div>

        )
    }
}

export default Welcome