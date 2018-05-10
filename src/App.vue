<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "App",
        data () {
            return {
            }
        },
    };
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        text-align: center;
        color: #2c3e50;
    }
</style>
