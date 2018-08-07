import moment from 'moment'

export function startLoadingMyPool() {
    return (dispatch) => {
        return fetch("http://localhost:8080/api/pools/user", {
            method: "GET",
            credentials: 'include'
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(loadMyPools(result.data))
        }).catch((error) => {
            //TODO
            console.log("Failed to load pools {}", error)
        })
    }
}

export function startLoadingPools() {
    return (dispatch) => {
        return fetch("http://localhost:8080/api/pools", {
            method: "GET",
            credentials: 'include'
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(loadPools(result.data))
        }).catch((error) => {
            //TODO
            console.log("Failed to load pools {}", error)
        })
    }
}


export function startLoadingProfile() {
    return (dispatch) => {
        return fetch("http://localhost:8080/api/users", {
            method: "GET",
            credentials: 'include'
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(loadProfile(result.data))
        }).catch((error) => {
            console.log("Failed to load profile {}", error)
        })
    }
}

export function isUserLoggedIn() {
    return (dispatch) => {
        return fetch("http://localhost:8080/api/users", {
            method: "GET",
            credentials: 'include'
        }).then(result => {
            if (result.ok) {
                dispatch(isLoggedIn(true))
            } else {
                dispatch(isLoggedIn(false))
            }
        })
    }
}


export function startLoadingTrips() {
    return (dispatch) => {
        return fetch("http://localhost:8080/api/users/trips", {
            method: "GET",
            credentials: 'include'
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(loadTrips(result.data))
        }).catch((error) => {
            //TODO
            console.log("Failed to load trips {}", error)
        })
    }
}


export function startLoadingCar() {
    return (dispatch) => {
        return fetch("http://localhost:8080/api/vehicles", {
            method: "GET",
            credentials: 'include'
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(loadMyCar(result.data))
        }).catch((error) => {
            console.log("Failed to load profile {}", error)
        })
    }
}

export function registerCar(event) {
    return (dispatch) => {
        event.preventDefault()
        const formData = {
            "brand": event.target.form.elements.brand.value,
            "description": event.target.form.elements.description.value,
            "number": event.target.form.elements.number.value,
            "capacity": event.target.form.elements.capacity.value,
            "type": "CAR"
        }

        return fetch("http://localhost:8080/api/vehicles", {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json'}
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(loadMyCar(result.data))
        }).catch((error) => {
            //TODO
            console.log("Failed to register car {}", error)
        })
    }
}

export function deRegisterCar(uuid) {
    console.log("uuid:" +uuid)
    return (dispatch) => {
        return fetch("http://localhost:8080/api/vehicles/"+ uuid, {
            method: "DELETE",
            credentials: 'include',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(result => {
            if (result.ok) {
                dispatch(startLoadingCar())
            } else {
                throw  new Error(result.status)
            }
        }).catch((error) => {
            //TODO
            console.log("Failed to register car {}", error)
        })
    }
}


export function schedulePool(event) {
    return (dispatch) => {
        event.preventDefault()
        const ddd = moment(event.target.form.elements.startTime.value, 'DD-MM-YYYYThh:mmaz').valueOf()
        console.log( ddd  )
        const formData = {
            "route": event.target.form.elements.route.value,
            "startTime":  ddd,
        }

        return fetch("http://localhost:8080/api/pools", {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json'}
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(startLoadingPools(result.data))
        }).catch((error) => {
            //TODO
            console.log("Failed to register car {}", error)
        })
    }
}


export function joinPool(poolId) {
    return (dispatch) => {
        console.log("poolid :" + poolId)
        return fetch("http://localhost:8080/api/pools/"+poolId + "/join", {
            method: "POST",
            credentials: 'include',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(startLoadingTrips())
        }).catch((error) => {
            //TODO
            console.log("Failed to join pool {}", error)
        })
    }
}


export function updateProfileInfo(event, uuid) {
    return (dispatch) => {
        event.preventDefault()
        const formData = {
            "uuid" : uuid,
            "phone": event.target.form.elements.phone.value
        }

        return fetch("http://localhost:8080/api/users", {
            method: "PUT",
            credentials: 'include',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json'}
        }).then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw  new Error(result.status)
            }
        }).then(result => {
            dispatch(startLoadingProfile())
        }).catch((error) => {
            //TODO
            console.log("Failed to update profile info {}", error)
        })
    }
}

export function loadMyPools(myPools) {
    return {
        type: 'LOAD_MY_POOLS',
        myPools
    }
}


export function loadPools(pools) {
    return {
        type: 'LOAD_POOLS',
        pools
    }
}

export function loadTrips(trips) {
    return {
        type: 'LOAD_TRIPS',
        trips
    }
}

export function loadMyCar(car) {
    return {
        type: 'LOAD_MY_CAR',
        car
    }
}

//Load profile
export function isLoggedIn(loogedIn) {
    return {
        type: 'UPDATE_SESSION',
        loogedIn
    }
}


//Load profile
export function loadProfile(profile) {
    return {
        type: 'LOAD_PROFILE',
        profile
    }
}

export function updateProfile(uuid) {
    return {
        type: 'UPDATE_PROFILE',
        uuid
    }
}