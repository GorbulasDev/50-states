//
// File: stateService.js
// Purpose: Makes client-side API calls to the server.
//
import axios from 'axios'

export default {
    // Returns a list of all states.
    getAllStates() {
        return axios.get('api/states').then(response => {
            return response.data
        })
    },

    // Sets the visited property when clicking on the checkbox.
    setVisited(stateName, visitedState) {
        const requestData = { visitedState: visitedState }
        return axios.patch('/api/states/'+ stateName, requestData)
            .then(response => {
                return response.data
            })
    },

    // Returns one state.
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName)
            .then(response => {
                return response.data
            })
    },
    
    // Returns a list of visited states.
    getStatesVisited() {
        return axios.get('/api/statesvisited')
            .then(response => {
                return response.data
            })
    }
}
