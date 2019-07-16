<template>
    <div class="content-component">
        <div class="titlebar">
            <div class="titlebar-content black-text ml-10">Mike's career Dashboard</div>
        </div>
        <div class="content"></div>
        <div class="card sheet theme-light">
            <div class="card-title pt-15">
                <div>
                    <h3 class=" headline mb-0 black-text">Mike O'Brien</h3>
                    <div>San Diego</div>
                </div>
            </div>
            <div class="list">
                <div class="list-item-tile">
                    <div class="list-item-tile-action">
                        <i aria-hidden="true" class="v-icon material-icons indigo-text">phone</i>
                    </div>
                    <div class="list-item-tile-content">
                        <div class="list-item-tile-title">(650) 555-1234</div>
                        <div class="list-item-tile-sub-title">Mobile</div>
                    </div>
                </div>
                <hr>
                <div class="list-item-tile">
                    <div class="list-item-tile-action">
                        <i aria-hidden="true" class="v-icon material-icons indigo-text">mail</i>
                    </div>
                    <div class="list-item-tile-content">
                        <div class="list-item-tile-title">mcob@postings.com</div>
                        <div class="list-item-tile-sub-title">Work Email</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .content-component {
        width: 345px;
        height: 100%;
    }
    .titlebar{
        width: 100%;
        height: 56px;
        background-color: white;
        display: flex;
        align-items: center;
    }
    .titlebar-content {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: .02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content {
        background-color: black;
        width: 100%;
        height: 100%
    }
    .sheet {
        display: block;
        border-radius: 2px;
        position: relative;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
    }
    .card {
        -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        text-decoration: none;
        position: absolute;
        right: 55px;
        bottom: 0;
        left: 0;
    }
    .card-title {
        display: flex;
        align-items: center;
        padding: 16px;
    }
    .list-item-tile {
        height: 72px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 16px;
        font-weight: 400;
        height: 48px;
        margin: 0;
        padding: 0 16px;
        position: relative;
        text-decoration: none;
        -webkit-transition: background .3s cubic-bezier(.25,.8,.5,1);
        transition: background .3s cubic-bezier(.25,.8,.5,1);
    }
    .list-item-tile-title {
        height: 24px;
        line-height: 24px;
        position: relative;
        text-align: left;
    }
    .list-item-tile .list-item-tile-sub-title {
        color: rgba(0, 0, 0, 0.54);
    }
    .list-item-tile-sub-title {
        font-size: 14px;
    }
    .list-item-tile-sub-title, .list-item-tile-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
        width: 100%;
    }
    .list-item-tile-content {
        margin-left: 32px;
    }
    .theme-light .sheet {
        background-color: #fff;
        border-color: #fff;
        color: rgba(0,0,0,.87);
    }
    .theme-light .card {
        background-color: #fff;
        border-color: #fff;
        color: rgba(0,0,0,.87);
    }    
</style>
