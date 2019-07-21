import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        compNum: 0,
        title: ["Mike's Career Dashboard", "Jobs and Recruiters", "Mike's Career Contacts", "Activity Logs"]
    },

    getters: {
        compNum: state => {
            return state.compNum
        },
        title: state => {
            return state.title
        }
    }, 

    mutations: {
        setComp(state, payload) {
            state.compNum = payload;
        }
    }, 

    actions: {

    }
});