<template>
    <div>
        <div class="v-card v-sheet theme--light">
            <Title :title="title"></Title>
            <Dashboard></Dashboard>
            <Card></Card>
        </div>
    </div>
</template>

<script>
import Title from './../components/Title.vue';
import Dashboard from './../components/Dashboard.vue';
import Jobs from './../components/Jobs.vue';
import Contacts from './../components/Contacts.vue';
import Log from './../components/Log.vue';
import Card from './../components/Card.vue';

export default {
    components: {
        Title,
        Dashboard,
        Jobs,
        Contacts,
        Log,
        Card,        
    },
    data:()=> ({
        title: "Mike's Career Dashboard",
    })
}
</script>

<style scoped>
    .theme--light.v-sheet {
        background-color: #fff;
        border-color: #fff;
        color: rgba(0,0,0,.87);
    }
    .theme--light.v-card {
        background-color: #fff;
        border-color: #fff;
        color: rgba(0,0,0,.87);
    }
    .v-sheet {
        display: block;
        border-radius: 2px;
        position: relative;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
    }
    .v-card {
        -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        text-decoration: none;
    }
   .v-card>:first-child:not(.v-btn):not(.v-chip) {
       border-top-left-radius: inherit;
        border-top-right-radius: inherit;
   }
    .v-card>:last-child:not(.v-btn):not(.v-chip) {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
    .theme--light.v-sheet {
        background-color: #fff;
        border-color: #fff;
        color: rgba(0,0,0,.87);
    }
    .theme--light.v-card {
        background-color: #fff;
        border-color: #fff;
        color: rgba(0,0,0,.87);
    }
</style>

