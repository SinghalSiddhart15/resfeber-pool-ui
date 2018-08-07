import React, {Component} from 'react'
import {List} from 'semantic-ui-react'
import Trip from './Trip'

class Trips extends Component {

    componentDidMount() {
        this.props.startLoadingTrips()
    }

    render() {
        if(!this.props.trips){
            return (
                <div>
                    <p>You don't have any past trips</p>
                </div>
            )
        }else{
            return (
                <div>
                    <List divided verticalAlign='middle'>
                        {
                            this.props.trips.map((trip, index) => <Trip key={index} trip={trip} {...this.props}/>)
                        }
                    </List>
                </div>
            )
        }

    }
}


export default Trips