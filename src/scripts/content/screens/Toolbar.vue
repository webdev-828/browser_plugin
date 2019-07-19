<template>
    <div class="v-toolbar__content" id="v-toolbar__content" style="height: 56px">
        <div class="v-toolbar__title white--text">{{ plugin_name }}</div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        plugin_name: "Climber.com Career Manager",
    }),
};
</script>

<style scoped>
    .v-toolbar__content{
        padding: 0 16px;
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
    .v-toolbar__title {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: .02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .theme--dark.v-toolbar {
        background-color: #212121;
        color: #fff;
    }
</style>
