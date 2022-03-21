import Vue from 'vue';
import Vuex from 'vuex';

import headeNavbar from './modules/headerNavbar.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        headeNavbar
    }
})