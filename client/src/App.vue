<template>
<div>
  <!-- Render these components to the main application view. -->
  <page-header></page-header>
  <router-view></router-view>
  <page-footer></page-footer>
</div>
</template>

<script>
// Connect the components to the main application view.
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import AboutSite from '@/components/AboutSite.vue'
import StateDetail from '@/components/StateDetail.vue'
import StateList from '@/components/StateList.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    AboutSite,
    StateDetail,
    StateList
  },

  // When the component loads, make this call.
  mounted() {
    this.$stateService.getAllStates().then(states => console.log(states))
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
