<template>
    <nav class="v-toolbar theme--dark grey lighten-5 black-text" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);" data-booted="true">
        <div class="v-toolbar__content" style="height: 56px;">
            <div class="v-toolbar__title">Mike's Career Dashboard</div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .v-toolbar[data-booted=true] {
        -webkit-transition: .2s cubic-bezier(.4,0,.2,1);
        transition: .2s cubic-bezier(.4,0,.2,1);
    }
    .theme--dark .v-toolbar {
        background-color: #212121;
        color: #fff;
    }
    .grey.lighten-5 {
        background-color: #fafafa!important;
        border-color: #fafafa!important;
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
    nav {
        display: block;
    }
    .v-toolbar__content, .v-toolbar__extension {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0 24px;
    }
    .v-toolbar__content>:last-child, .v-toolbar__extension>:last-child {
        margin-right: 0;
    }
    .v-toolbar__content>:first-child, .v-toolbar__extension>:first-child {
        margin-left: 0;
    }
    .v-toolbar__title {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: .02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
