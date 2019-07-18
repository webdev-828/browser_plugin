<template>
    <div>
        <div class="v-card__title v-card__title--primary">
            <div>
                <h3 class="headline mb-0">Mike O'Brien</h3>
                <div>San Diego</div>
            </div>
        </div>
        <div role="list" class="v-list v-list--two-line theme--light">
            <div role="listitem">
                <div class="v-list__tile theme--light">
                    <div class="v-list__tile__action">
                        <i aria-hidden="true" class="v-icon material-icons theme--light indigo--text">phone</i>
                    </div>
                    <div class="v-list__tile__content">
                        <div class="v-list__tile__title">(650) 555-1234</div>
                        <div class="v-list__tile__sub-title">Mobile</div>
                    </div>
                </div>
            </div>
            <hr class="v-divider v-divider--inset theme--light">
            <div role="listitem">
                <div class="v-list__tile theme--light">
                    <div class="v-list__tile__action">
                        <i aria-hidden="true" class="v-icon material-icons theme--light indigo--text">mail</i>
                    </div>
                    <div class="v-list__tile__content">
                        <div class="v-list__tile__title">mcob@postings.com</div>
                        <div class="v-list__tile__sub-title">Work Email</div>
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
    .v-card__title--primary {
        padding-top: 24px;
    }
    .v-card__title {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 16px;
    }
    .headline {
        font-size: 24px !important;
        line-height: 32px !important;
    }
    .display-1, .headline {
        font-weight: 400;
        letter-spacing: normal!important;
        font-family: Roboto,sans-serif!important;
    }
    .theme--light.v-list {
        background: #fff;
        color: rgba(0,0,0,.87);
    }
    .v-list {
        list-style-type: none;
        padding: 8px 0 8px;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
    }
    .v-list>div {
        -webkit-transition: inherit;
        transition: inherit;
    }

    .v-list--two-line .v-list__tile {
        height: 72px;
    }
    .v-list__tile {
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
    .v-list__tile__action {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .v-list__tile__action, .v-list__tile__avatar {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        min-width: 56px;
    }
    .v-list__tile__action, .v-list__tile__content {
        height: 100%;
    }
    .theme--light .v-icon {
        color: rgba(0, 0, 0, .54);
    }
    .v-icon {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-font-feature-settings: "liga";
        font-feature-settings: "liga";
        font-size: 24px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: 1;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
        vertical-align: text-bottom;
    }
    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
    }
    .v-list__tile__content {
        text-align: left;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .v-list__tile__action--stack, .v-list__tile__content {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
    }
    .v-list__tile__action, .v-list__tile__content {
        height: 100%;
    }
    .v-list__tile__title {
        height: 24px;
        line-height: 24px;
        position: relative;
        text-align: left;
    }

    .v-list__tile__sub-title, .v-list__tile__title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
        width: 100%;
    }
    .v-list__tile__sub-title {
        color: rgba(0,0,0,.54);
    }
    .v-list__tile__sub-title {
        font-size: 14px;
    }
    .v-list__tile__sub-title, .v-list__tile__title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
        width: 100%;
    }
    .v-divider--inset:not(.v-divider--vertical) {
        margin-left: 72px;
        max-width: calc(100% - 72px);
    }
    .theme--light.v-divider {
        border-color: rgba(0,0,0,.12);
    }
    .v-divider {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0px;
        max-width: 100%;
        height: 0;
        max-height: 0;
        border: solid;
        border-width: thin 0 0 0;
        -webkit-transition: inherit;
        transition: inherit;
    }
    hr {
        overflow: visible;
    }
</style>
