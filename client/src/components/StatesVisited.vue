<template>
    <div>
        <h2>States You Have Visited</h2>

        <p v-for="state in statesVisited" :key="state.id">{{ state.name }}</p>
        <p v-if="statesVisited < 1">You have not visited any States!</p>
    </div>
</template>

<script>
export default {
    name: 'StatesVisited',
    data() {
        return {
            statesVisited: []
        }
    },
    // This attempts to fetch a list of states upon loading the component.
    mounted() {
        this.$stateService.getStatesVisited().then(statesVisited => {
            this.statesVisited = statesVisited
        })
        .catch(err => {
            alert('Sorry, an error occured, preventing to see the list of visited states.')
            console.error(err) // for the developer
        })
    }
}
</script>
