<template>
    <div>
        <h2>Page not found.</h2>
        <p>Would you like to go to <router-link v-bind:to="{ name: 'StateList' }">the home page</router-link>?</p>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>
