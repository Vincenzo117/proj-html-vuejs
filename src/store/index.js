import Vue from 'vue';
import Vuex from 'vuex';

import headeNavbar from './modules/headerNavbar.js';
import headerQuotes from './modules/headerQuotes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        headeNavbar,
        headerQuotes
    }
})