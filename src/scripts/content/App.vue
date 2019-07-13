<template>
    <div class="layout">
        <div class="toolbar">
            <Toolbar></Toolbar>
        </div>
        <div>
            <div class="content"></div>
            <div class="navbar"></div>
        </div>
    </div>
</template>

<script>
import Toolbar from './components/Toobar.vue';
import Content from './components/Content.vue';
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Toolbar,
        Content,
        Navbar,        
    }
}
</script>

<style scoped>
</style>
