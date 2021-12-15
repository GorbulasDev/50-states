<template>
<div class="state-map">
        <h2>The state of {{ state.name }}</h2>

        <p v-if="state.visitedState">You have visited this state</p>
        <p v-else>You have not visited this state</p>

    <!-- Only show the map if our data is ready. -->
    <div id="map-container" v-if="dataReady">
        <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors">
            </l-tile-layer>
        </l-map>
    </div>
</div>
</template>

<script>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
    name: 'StateMap',
    components: { LMap, LTileLayer },
    data() {
        return {
            state: {},
            dataReady: false,
            mapReady: false
        }
    },
    mounted() {
        // Global property ($router).
        // Read the param of the state inside index.js (/map/:state) inside our router.
        this.state.name = this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOneState(this.state.name)
                .then(state => {
                    this.state = state
                    this.dataReady = true
                }).catch(err => {
                    // Handle 404 and 500 (not found and server errors).
                    if (err.response && err.response.status == 404) {
                        this.$router.push({ name: 'NotFound' })
                    } else {
                        // 500 server error.
                        alert('Sorry, error fetching data about this State.') // for the user.
                        console.error(err) // for the developer
                    }
                })
        },
        // Set the map data to be true.
        onMapReady() {
            this.mapReady = true
        },
        // If our map and data are ready, set the map's center and zoom level.
        setMapView() {
            if (this.mapReady && this.dataReady) {
                // Make sure map and data is ready and then show correct part of the world
                // with zoom level.
                this.$ref.map.leafletObject.setView(this.mapCenter, this.zoom)
            }
        }
    },
    computed: {
        // When the map and data are ready, perform the compute.
        // Return the center of the map.
        mapCenter() {
            return [ this.state.lat, this.state.lon ]
        }
    }
}
</script>

<style scoped>
#map-container {
    height: 30rem;
}
</style>
