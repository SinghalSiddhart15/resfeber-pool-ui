import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Pools from './Pools'
import Header from './Header'
import Footer from "./Footer";
import RightPanel from './RightPanel'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Welcome from './Welcome'
import Trips from './Trips'
import MyCar from './MyCar'
import Schedule from "./Schedule";

class Main extends Component {

    constructor() {
        super();
    }

    componentDidMount(){
        this.props.isUserLoggedIn()
        this.props.startLoadingProfile()
    }


    render() {
        if (!this.props.profile) {
            return (
                    <Route exact path="/" render={() => (
                        <Welcome {...this.props}/>
                    )}/>

            )
        } else {
            return (

                <div className="pool-container">
                    <div className="pool-header">
                        <Header/>
                    </div>
                    <div className="pool-section">
                        <div className="pools">

                            <Route path="/pools" render={() => (
                                <Pools {...this.props}/>
                            )}/>

                            <Route path="/profile" render={({history}) => (
                                <Profile {...this.props}  onHistory={history}/>
                            )}/>

                            <Route path="/updateProfile" render={({history}) => (
                                <UpdateProfile {...this.props} onHistory={history}/>
                            )}/>

                            <Route path="/myCar" render={({history}) => (
                                <MyCar  {...this.props} onHistory={history} />
                            )}/>

                            <Route path="/schedule" render={({history}) => (
                                <Schedule  {...this.props} onHistory={history} />
                            )}/>

                            <Route path="/trips" render={() => (
                                <Trips {...this.props}/>
                            )}/>
                        </div>
                        <div className="pool-nav">
                            <RightPanel/>
                        </div>
                    </div>
                    <div className="pool-footer">
                        <Footer/>
                    </div>

                </div>
            )
        }

    }

}

export default Main