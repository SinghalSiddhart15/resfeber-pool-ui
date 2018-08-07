import React, {Component} from 'react'
import {List} from 'semantic-ui-react'
import Pool from './Pool'

class Pools extends Component {

    componentDidMount() {
        this.props.startLoadingPools()
    }

    render() {
        return (
            <div>
                <List divided verticalAlign='middle'>
                {
                    this.props.pools.map((pool, index) => <Pool key={index} pool={pool} {...this.props}/>)
                }
                </List>
            </div>
        )
    }
}


export default Pools