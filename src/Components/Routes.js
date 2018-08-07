import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Pools from './Pools'
import Header from './Header'
import Footer from "./Footer";
import  RightPanel from './RightPanel'
import  Profile from './Profile'
import UpdateProfile from './UpdateProfile'


const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" render={() => (
                <Pools {...this.props}/>
            )}/>

            <Route  path="/profile" render={() => (
                <Profile {...this.props}/>
            )}/>

            <Route  path="/updateProfile" render={({history}) => (
                <UpdateProfile {...this.props} onHistory={history}/>
            )}/>

            <Route  path="/vehicles" render={() => (
                <h1>Cars...</h1>
            )}/>

            <Route  path="/schedule" render={() => (
                <h1>Schedule...</h1>
            )}/>

            <Route  path="/trips" render={() => (
                <h1>Trips...</h1>
            )}/>

            <Route  path="/logout" render={() => (
                <h1>Logout...</h1>
            )}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;