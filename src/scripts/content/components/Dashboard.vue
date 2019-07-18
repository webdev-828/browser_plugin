<template>
    <div>
        <div class="v-responsive v-image">
            <div class="v-responsive__sizer"></div>
            <div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://picsum.photos/id/1005/400/300&quot;); background-position: center center;"></div>
            <div class="v-responsive__content"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .v-responsive {
        position: relative;
        overflow: hidden;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .v-image {
        z-index: 0;
    }
    .v-responsive__sizer {
        -webkit-transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);
        transition: padding-bottom .2s cubic-bezier(.25,.8,.5,1);
        -webkit-box-flex: 0;
        -ms-flex: 0 0 0px;
        flex: 0 0 0px;
        padding-bottom: 75.188%;
    }
    .v-image__image--cover {
        background-size: cover;
    }
    .v-image__image {
        background-repeat: no-repeat;
    }
    .v-image__image, .v-image__placeholder {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .v-responsive__content {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 0px;
        flex: 1 0 0px;
    }
</style>
