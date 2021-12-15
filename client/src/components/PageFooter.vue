<template>
    <div class="footer">
        <div class="m-2">
            <span class="p-3">
                <router-link to="/">Home</router-link>
            </span>
        
        <span class="p-3">
            <router-link to="/about">About this site</router-link>
        </span>

        <span class="p-3">
            <router-link to="/visitedstates">States visited</router-link>
        </span>
    </div>

    <p>Header image and map photo by
        <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton on Unplash</a>
    </p>

    <div class="credits">
        <p>
            <a target="_blank" href="https://icons8.com/icon/43632/map">Map</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'PageFooter'
}
</script>
