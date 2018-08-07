import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import * as actions from '../redux/actions'

function mapStateToProps(state) {
    return {
        loogedIn : state.loogedIn,
        authToken : state.authToken,
        profile: state.profile,
        pools: state.pools,
        myPools : state.myPools,
        car: state.car,
        trips:state.trips
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)

}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App