<template>
<div>
    <div>
        <!-- Display a list of total states, including DC. -->
        <state-summary v-bind:states="states"></state-summary>
    </div>

    <div class="state-list-container">
        <div class="state-container" v-for="state in states" :key="state.name">
            <state-detail v-bind:state="state" v-on:update-visited="updateVisited"></state-detail>
        </div>
    </div>
</div>
</template>

<script>
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'

export default {
    name: 'StateList',
    components: { StateDetail, StateSummary },
    data() {
        return {
            // Generate an array of states.
            states: []
        }
    },
    // This attempts to fetch a list of states upon loading the component.
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        // Make an Axios call to fetch the states. 
        fetchAllStates() {
            this.$stateService.getAllStates().then(states => {
                this.states = states
            }).catch(err => {
                alert('Sorry, an error occured while attempting to fetch the list of states.')
                console.error(err) // for the developer.
            })
        },
        // Updates the application state after clicking on the checkbox.
        updateVisited(stateName, visitedState) {
            this.$stateService.setVisited(stateName, visitedState)
                .then( () => {
                    this.fetchAllStates()
                }).catch(err => {
                    alert('Sorry, an error occured while attempting to update the state.')
                    console.error(err) // for the developer.
                })
        }
    }
}
</script>

<style scoped>
.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    margin: 1rem;
}
</style>
