<template>
    <div class="application--wrap">
        <div class="main-grid">
            <nav class="v-toolbar theme--dark blue" id="toolbar" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);" data-booted="true">
                <Toolbar></Toolbar>
            </nav>
            <div id="content">
                <Content></Content>
            </div>
            <div id="nav" class="blue">
                <Navbar></Navbar>
            </div>
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
    .main-grid {
        display: grid;
        grid-template-columns: auto 56px;
        grid-template-rows: 56px auto;
        grid-template-areas: "toolbar toolbar" "content nav";
        height: 100vh;
        border-left: 1px solid #000;
    }
    .main-grid #toolbar {
        grid-area: toolbar;
    }
    .v-toolbar {
        -webkit-transition: .2s cubic-bezier(.4,0,.2,1);
        transition: .2s cubic-bezier(.4,0,.2,1);
    }
    .theme--dark .v-toolbar {
        background-color: #212121;
        color: #fff;
    }
    .v-toolbar {
        -webkit-transition: none;
        transition: none;
        -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
        position: relative;
        width: 100%;
        will-change: padding-left,padding-right;
    }
    .main-grid #content[data-v-d65123d8] {
        grid-area: content;
        min-height: 4em;
        max-height: 100%;
        overflow-y: auto;
    }
    .main-grid #nav {
        grid-area: nav;
    }
    #nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        border-left: 1px solid #fff;
        height: 100%;
        color: #e5e5e5;
    }
</style>