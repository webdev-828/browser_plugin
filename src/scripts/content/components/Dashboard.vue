<template>
    <div>
        <nav class="v-toolbar theme--dark grey lighten-5 black--text" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);" data-booted="true">
            <div class="v-toolbar__content" style="height: 56px;">
                <div class="v-toolbar__title">Mike's Career Dashboard</div>
            </div>
        </nav>
        <div class="v-responsive v-image">
            <div class="v-responsive__sizer"></div>
            <div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://picsum.photos/id/1005/400/300&quot;); background-position: center center;"></div>
            <div class="v-responsive__content"></div>
        </div>
        <div class="v-url">
            <p class="v-url__tile">Your URL<a class="v-link blue--text">http://clm.bz/CHs4ZI</a> </p>
        </div>
        <div>
            <table class="v-table">
                <tr class="blue--text">
                    <td></td>
                    <td>Today</td>
                    <td class="pr-10" align="right">This week</td>
                </tr>
                <tr
                    v-for="detail in details"
                    :key="detail.id"
                    :class="{'greyBackColor': detail.id % 2 === 0, 'whiteBackColor': detail.id % 2 !== 0}"
                >
                    <td class="v-font__bold pl-10">{{detail.status}}</td>
                    <td class="pl-10">{{detail.todayNum}}</td>
                    <td class="pl-10 pr-10" align="right">{{detail.weekNum}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        details: [
            {
                id: 0,
                status: "Jobs Viewed",
                todayNum: 0,
                weekNum: 0
            },
            {
                id: 1,
                status: "Jobs Searched",
                todayNum: 0,
                weekNum: 1
            },
            {
                id: 2,
                status: "Resumes Sent",
                todayNum: 0,
                weekNum:0
            },
            {
                id: 3,
                status: "Linkedin Invites Sent",
                todayNum: 10,
                weekNum: 13
            }
        ]
    }),
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
        padding-bottom: 70%;
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
    .v-url {
        background-color: lightgrey;
    }
    .v-url>.v-url__tile {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        margin: 0;
        padding: 0 16px;
        position: relative;
        text-decoration: none;
        -webkit-transition: background .3s cubic-bezier(.25,.8,.5,1);
        transition: background .3s cubic-bezier(.25,.8,.5,1);
    }
    .v-link {
        padding-left: 16px;
    }
    .v-table {
        font-size: 14px;
        font-weight: 400;
        width: 100%;
        height: 48px;
        margin: 0;
        position: relative;
        text-decoration: none;
        -webkit-transition: background .3s cubic-bezier(.25,.8,.5,1);
        transition: background .3s cubic-bezier(.25,.8,.5,1);
    }
    .v-font__bold {
        font-weight: bold;
    }
    .greyBackColor {
        background-color: lightgrey;
    }
    .whiteBackColor {
        background-color: white;
    }
</style>
