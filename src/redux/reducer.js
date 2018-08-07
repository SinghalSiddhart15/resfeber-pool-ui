import _profile from '../data/Profile'
import _pools from '../data/Pools'
import _session from '../data/Session'
import _trips from '../data/Trips'
import _car from '../data/Car'
import {combineReducers} from 'redux'


function loogedIn(state = _session, action) {
    switch (action.type) {
        case 'UPDATE_SESSION':
            return action.loogedIn
        default:
            return state
    }
}


function profile(state = _profile, action) {
    switch (action.type) {
        case 'LOAD_PROFILE':
            return action.profile
        case 'UPDATE_PROFILE':
            return state
        default:
            return state
    }
}

function pools(state = _pools, action) {
    switch (action.type) {
        case 'LOAD_POOLS':
            return action.pools
        default:
            return state
    }
}

function myPools(state = _pools, action) {
    switch (action.type) {
        case 'LOAD_MY_POOLS':
            return action.myPools
        default:
            return state
    }
}

function trips(state = _trips, action) {
    switch (action.type) {
        case 'LOAD_TRIPS':
            return action.trips
        default:
            return state
    }
}

function car(state = _car, action) {
    switch (action.type) {
        case 'LOAD_MY_CAR':
            return action.car
        default:
            return state
    }
}



const rootReducer = combineReducers({loogedIn, profile, pools,trips,car,myPools})
export default rootReducer