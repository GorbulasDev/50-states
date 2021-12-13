<template>
    <div>
        <p>There are a total of {{ states.length }} states and the District of Columbia.</p>
        <p>You have visited {{ totalVisited }} {{ units }}.</p>
        <p id="all-visited-message" v-if="areAllVisited">You have visited all the states and the District of Columbia.</p>
    </div>
</template>

<script>
export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        // Computes and returns a count of how many states we have visited.
        totalVisited() {
            let visitedCount = 0
            this.states.forEach(state => {
                if (state.visitedState) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        // Handler to see if we should display state or states.
        // For example, 0 would return states, 1 returns state, and so forth.
        units() {
            if (this.totalVisited == 1) {
                return 'state'
            } else {
                return 'states'
            }
        },
        // Handler to see if we have visited all states.
        areAllVisited() {
            return this.totalVisited === this.states.length
        }
    }
}
</script>

<style scoped>
#all-visited-message {
    color: purple;
    font-weight: 600;
}
</style>
