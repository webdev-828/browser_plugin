<template>
    <div>
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
