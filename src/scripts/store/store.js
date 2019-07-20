import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        compNum: 0,

    },

    getters: {
        compNum: state => {
            return state.compNum
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